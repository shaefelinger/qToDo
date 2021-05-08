import Vue from "vue";
import { uid, Notify } from "quasar";
import { firebaseDB, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  tasks: {
    // ID1: {
    //   name: "Go to shop",
    //   completed: false,
    //   dueDate: "2019/05/12",
    //   dueTime: "18:30"
    // },
    // ID2: {
    //   name: "Get bananas",
    //   completed: false,
    //   dueDate: "2019/05/13",
    //   dueTime: "14:00"
    // },
    // ID3: {
    //   name: "Get apples",
    //   completed: false,
    //   dueDate: "2019/05/14",
    //   dueTime: "16:30"
    // },
  },
  search: "",
  sort: "dueDate",
  tasksDownloaded: false
};

const mutations = {
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  DELETE_TASK(state, id) {
    Vue.delete(state.tasks, id);
  },
  ADD_TASK(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  CLEAR_TASKS(state) {
    state.tasks = {};
  },
  SET_SEARCH(state, value) {
    state.search = value;
  },
  SET_SORT(state, value) {
    state.sort = value;
  },
  SET_TASKS_DOWNLOADED(state, value) {
    state.tasksDownloaded = value;
  }
};

const actions = {
  updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch("fbDeleteTask", id);
  },
  addTask({ dispatch }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    dispatch("fbAddTask", payload);
  },
  setSearch(context, value) {
    context.commit("SET_SEARCH", value);
  },
  setSort(context, value) {
    context.commit("SET_SORT", value);
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDB.ref("tasks/" + userId);

    // initial check for data
    userTasks.once(
      "value",
      snapshot => {
        commit("SET_TASKS_DOWNLOADED", true);
      },
      error => {
        showErrorMessage(error.message);
        this.$router.replace("/auth");
      }
    );

    // child added
    userTasks.on("child_added", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task
      };
      commit("ADD_TASK", payload);
    });
    // child changed
    userTasks.on("child_changed", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task
      };
      console.log(payload);
      commit("UPDATE_TASK", payload);
    });
    // child removed
    userTasks.on("child_removed", snapshot => {
      let taskId = snapshot.key;
      commit("DELETE_TASK", taskId);
    });
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    // userId = "ZRgITk3J2UYvNqPhrlvlGEIrPcv2";
    let taskRef = firebaseDB.ref("tasks/" + userId + "/" + payload.id);
    taskRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Task added!");
      }
    });
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDB.ref("tasks/" + userId + "/" + payload.id);
    taskRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        let keys = Object.keys(payload.updates);
        if (!(keys.includes("completed") && keys.length == 1)) {
          Notify.create("Task updated!");
        }
      }
    });
  },
  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDB.ref("tasks/" + userId + "/" + taskId);
    taskRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Task Deleted!");
      }
    });
  }
};

const getters = {
  tasksSorted: state => {
    console.log("state.tasks", state.tasks);
    let tasksSorted = {};
    let keysOrdered = Object.keys(state.tasks);

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase();
      let taskBProp = state.tasks[b][state.sort].toLowerCase();

      if (taskAProp > taskBProp) return 1;
      else if (taskAProp < taskBProp) return -1;
      else return 0;
    });

    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key];
    });
    return tasksSorted;
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    if (state.search) {
      Object.keys(tasksSorted).forEach(key => {
        let task = tasksSorted[key];
        let taskNameLowerCase = task.name.toLowerCase();
        let searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;

    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

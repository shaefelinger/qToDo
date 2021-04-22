import Vue from "vue";
import { uid } from "quasar";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "18:30"
    },
    ID2: {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/05/13",
      dueTime: "14:00"
    },
    ID3: {
      name: "Get apples",
      completed: true,
      dueDate: "2019/05/14",
      dueTime: "16:30"
    }
  },
  search: ""
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
  SET_SEARCH(state, value) {
    state.search = value;
  }
};

const actions = {
  updateTask(context, payload) {
    console.log("update task action");
    context.commit("UPDATE_TASK", payload);
  },
  deleteTask(context, id) {
    context.commit("DELETE_TASK", id);
  },
  addTask(context, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    context.commit("ADD_TASK", payload);
  },
  setSearch(context, value) {
    context.commit("SET_SEARCH", value);
  }
};

const getters = {
  tasksFiltered: state => {
    let tasksFiltered = {};
    if (state.search) {
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key];
        let taskNameLowerCase = task.name.toLowerCase();
        let searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return state.tasks;
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

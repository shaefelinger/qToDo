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
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "16:30"
    }
  }
};

const mutations = {
  UPDATE_TASK: (state, payload) => {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  DELETE_TASK: (state, id) => {
    Vue.delete(state.tasks, id);
  },
  ADD_TASK: (state, payload) => {
    Vue.set(state.tasks, payload.id, payload.task);
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
  }
};

const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

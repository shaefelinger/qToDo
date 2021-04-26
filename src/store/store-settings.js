import { LocalStorage } from "quasar";



const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false
  }
};

const mutations = {
  SET_SHOW_12HOUR_TIME_FORMAT(state, value) {
    state.settings.show12HourTimeFormat = value;
  },
  SET_SHOW_TASKS_IN_ONE_LIST(state, value) {
    state.settings.showTasksInOneList = value;
  },
  SET_SETTINGS(state, settings) {
    Object.assign(state.settings, settings);
  }
};

const actions = {
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit("SET_SHOW_12HOUR_TIME_FORMAT", value);
    dispatch('saveSettings');
  },
  setShowTasksInOneList(context, value) {
    context.commit("SET_SHOW_TASKS_IN_ONE_LIST", value);
    context.dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({commit}) {
    let settings = LocalStorage.getItem('settings')
    if(settings) {
      commit("SET_SETTINGS", settings);
    }
  }
};

const getters = {
  settings: state => state.settings
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

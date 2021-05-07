import { LocalStorage, Loading } from "quasar";
import { firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  loggedIn: false
};

const mutations = {
  SET_LOGGED_IN(state, value) {
    state.loggedIn = value;
  }
};

const actions = {
  registerUser({}, payload) {
    Loading.show();
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange(context) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        context.commit("SET_LOGGED_IN", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/").catch(err => {});
        context.dispatch("tasks/fbReadData", null, { root: true });
      } else {
        context.commit("tasks/SET_TASKS_DOWNLOADED", false, { root: true });
        context.commit("SET_LOGGED_IN", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth").catch(err => {});
      }
    });
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

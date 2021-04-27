import { firebaseAuth } from "boot/firebase";
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
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error.message:", error.message);
      });
  },
  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error.message:", error.message);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange(context) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        context.commit("SET_LOGGED_IN", true);
        this.$router.push('/').catch(err =>{})
      } else {
        context.commit("SET_LOGGED_IN", false);
        this.$router.replace("/auth").catch(err =>{});
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

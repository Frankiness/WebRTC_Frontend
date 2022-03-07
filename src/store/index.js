import { createStore } from "vuex";

export default createStore({
  state: {
    isHost: "false",
    isOnlyAudio: false,
  },
  getters: {},
  mutations: {
    setHost(state, value) {
      state.isHost = value;
    },
    setConnectionType(state, value) {
      state.isOnlyAudio = value;
    },
  },
  actions: {},
  modules: {},
});

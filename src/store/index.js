import { createStore } from "vuex";

export default createStore({
  state: {
    isHost: "false",
    isOnlyAudio: false,
    inputRoomId: "",
    inputUsername: "",
  },
  getters: {},
  mutations: {
    setHost(state, value) {
      state.isHost = value;
    },
    setConnectionType(state, value) {
      state.isOnlyAudio = value;
    },
    setInputRoomId(state, value) {
      state.inputRoomId = value;
    },
    setInputUsername(state, value) {
      state.inputUsername = value;
    },
  },
  actions: {},
  modules: {},
});

import { createStore } from "vuex";

export default createStore({
  state: {
    isHost: "false",
    isOnlyAudio: false,
    inputRoomId: "",
    inputUsername: "",
    isMicMuted: true,
    isCameraClosed: false,
    isScreenSharingActive: false,
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
    setIsMicMuted(state, value) {
      state.isMicMuted = value;
    },
    setIsCameraClosed(state, value) {
      state.isCameraClosed = value;
    },
    setIsScreenSharingActive(state, value) {
      console.log("摄像头：" + value);
      state.isScreenSharingActive = value;
    },
  },
  actions: {},
  modules: {},
});

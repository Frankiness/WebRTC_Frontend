<template>
  <div class="video_button_container">
    <img
      class="video_button_image"
      :src="store.state.isMicMuted ? MicButtonImgOff : MicButtonImg"
      @click="handleMicButtonPressed"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import MicButtonImg from "../../../assets/images/mic.svg";
import MicButtonImgOff from "../../../assets/images/micOff.svg";

const store = useStore();
const handleMicButtonPressed = () => {
  store.commit("setIsMicMuted", !store.state.isMicMuted);
};
</script>

<style lang="less" scoped>
@import url("./button.css");
</style>
<template>
  <div class="video_button_container">
    <img
      class="video_button_image"
      :src="store.state.isCameraClosed ? CameraButtonImgOff : CameraButtonImg"
      @click="handleCameraButtonPressed"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import CameraButtonImg from "../../../assets/images/camera.svg";
import CameraButtonImgOff from "../../../assets/images/cameraOff.svg";

const store = useStore();
const handleCameraButtonPressed = () => {
  store.commit("setIsCameraClosed", !store.state.isCameraClosed);
};
</script>

<style lang="less" scoped>
@import url("./button.css");
</style>
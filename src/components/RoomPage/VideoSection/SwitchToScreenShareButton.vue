<template>
  <div class="video_button_container">
    <img
      class="video_button_image"
      :src="SwitchToScreenSharingImg"
      @click="handleScreenSharingButtonPressed"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import SwitchToScreenSharingImg from "../../../assets/images/switchToScreenSharing.svg";

const store = useStore();
const handleScreenSharingButtonPressed = () => {
  store.commit("setIsScreenSharingActive", !store.state.isScreenSharingActive);
};
</script>

<style lang="less" scoped>
@import url("./button.css");
</style>
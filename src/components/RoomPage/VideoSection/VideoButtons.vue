<template>
  <div class="video_buttons_container">
    <MicButton></MicButton>
    <CameraButton></CameraButton>
    <LeaveRoom></LeaveRoom>
    <SwitchToScreenShareButton></SwitchToScreenShareButton>
  </div>
</template>

<script setup>
import MicButton from "./MicButton.vue";
import CameraButton from "./CameraButton.vue";
import LeaveRoom from "./leaveRoomButton.vue";
import SwitchToScreenShareButton from "./SwitchToScreenShareButton.vue";
</script>

<style lang="less" scoped>
.video_buttons_container {
  width: 60%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20%;
  bottom: 0;
  background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
</style>
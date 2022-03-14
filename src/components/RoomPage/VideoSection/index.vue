<template>
  <div class="video_section_container">
    <VideoButtons></VideoButtons>
  </div>
</template>

<script setup>
import VideoButtons from "./VideoButtons.vue";
</script>

<style lang="less" scoped>
.video_section_container {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.videos_container {
  height: 90%;
  width: 100%;
  background-color: #f6f9fb;
  position: relative;
  border-radius: 0px 0px 25px 25px;
}
</style>
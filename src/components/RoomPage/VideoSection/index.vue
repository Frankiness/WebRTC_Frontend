<template>
  <div class="video_section_container">视频</div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.video_section_container {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
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

.video_button_container {
  margin-left: 25px;
  display: flex;
  flex-direction: column;
}

.video_button_image {
  height: 80%;
  padding: 10px;
  border-radius: 25px;
  transition: 0.3s;
}

.video_button_image:hover {
  background: blue;
  padding: 10px;
  border-radius: 25px;
}

.video_button_end {
  width: 200px;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 65px;
  border: none;
  color: white;
  background: #fc5d5b;
  box-shadow: 0px 3px 30px rgba(252, 93, 91, 0.1);
  transition: 0.2s;
}

.video_button_end:hover {
  background: red;
}

.videos_container {
  height: 90%;
  width: 100%;
  background-color: #f6f9fb;
  position: relative;
  border-radius: 0px 0px 25px 25px;
}
</style>
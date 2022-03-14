<template>
  <div class="video_button_container">
    <button class="video_button_end" @click="handleRoomDisconnected">
      离开房间
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
// 断开连接
const handleRoomDisconnected = () => {
  // 动态获取根地址
  const siteUrl = window.location.origin;
  window.location.href = siteUrl; // 重定向
};
</script>

<style lang="less" scoped>
@import url("./button.css");
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
</style>
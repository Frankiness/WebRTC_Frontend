<template>
  <div class="join_room_page_container">
    <div class="join_room_page_panel">
      <JoinRoomTitle :isRoomHost="isRoomHost"></JoinRoomTitle>
      <JoinRoomContent></JoinRoomContent>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const { useRoute } = require("vue-router");

import JoinRoomTitle from "../components/JoinRoomPage/JoinRoomTitle.vue";
import JoinRoomContent from "../components/JoinRoomPage/JoinRoomContent.vue";
const store = useStore();
// let props = defineProps();
let route = useRoute();
let isRoomHost = route.query.host;
if (isRoomHost) {
  store.commit("setHost", isRoomHost);
}

onMounted(() => {
  console.log("路由的参数：" + route.query.host);
});
</script>
<style lang="less" scoped>
.join_room_page_container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.join_room_page_panel {
  width: 400px;
  height: 400px;
  background-color: white;
  border: 1px solid grey;
  filter: drop-shadow(0 0 0.2rem grey);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.loading_overlay_container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 82, 201, 0.7);
}

.loading_overlay_loader {
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #0052c9;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

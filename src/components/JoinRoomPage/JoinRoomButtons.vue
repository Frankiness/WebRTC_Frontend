<template>
  <div class="join_room_buttons_container">
    <JoinRoomButton
      :buttonText="successButtonType"
      :cancelButton="false"
    ></JoinRoomButton>
    <JoinRoomButton :buttonText="cancel" :cancelButton="true"></JoinRoomButton>
  </div>
</template>

<script setup>
import JoinRoomButton from "./JoinRoomButton.vue";
import { defineProps } from "vue";
let { isRoomHost } = defineProps({
  isRoomHost: {
    type: String,
  },
});
console.log(isRoomHost);
let successButtonType = isRoomHost === "false" ? "主持" : "加入";
let cancel = "取消";
</script>

<style lang="less" scoped>
.join_room_buttons_container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  // height: 100px;
}
</style>

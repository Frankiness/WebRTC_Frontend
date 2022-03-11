<template>
  <div class="join_room_inputs_container">
    <JoinRoomInputs :isRoomHost="isRoomHost"></JoinRoomInputs>
  </div>
  <Checkbox></Checkbox>
  <ErrorMessage></ErrorMessage>
  <JoinRoomButtons :isRoomHost="isRoomHost"></JoinRoomButtons>
</template>

<script setup>
import { computed, ref, provide } from "@vue/runtime-core";
import JoinRoomInputs from "./JoinRoomInputs.vue";
import Checkbox from "./OnlyWithAudioCheckbox.vue";
import ErrorMessage from "./ErrorMessage.vue";
import JoinRoomButtons from "./JoinRoomButtons.vue";
const { useStore } = require("vuex");

let store = new useStore();

let isRoomHost = computed(() => {
  return store.state.isHost;
});

//provide提供错误提示信息
let errorMsg = ref("");
provide("errorMessage", errorMsg);
</script>

<style lang="less" scoped>
.join_room_inputs_container {
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 10px;
}
</style>

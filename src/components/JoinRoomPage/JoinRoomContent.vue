<template>
  <div class="join_room_inputs_container">
    <JoinRoomInputs :isRoomHost="isRoomHost"></JoinRoomInputs>
  </div>
  <Checkbox></Checkbox>
  <ErrorMessage :errorMessage="errorText"></ErrorMessage>
  <JoinRoomButtons :isRoomHost="isRoomHost"></JoinRoomButtons>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import JoinRoomInputs from "./JoinRoomInputs.vue";
import Checkbox from "./OnlyWithAudioCheckbox.vue";
import ErrorMessage from "./ErrorMessage.vue";
import JoinRoomButtons from "./JoinRoomButtons.vue";
const { useStore } = require("vuex");

let store = new useStore();

let isRoomHost = computed(() => {
  return store.state.isHost;
});
let errorText = "房间不存在";
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

<template>
  <div class="join_room_inputs_container">
    <JoinRoomInputs :isRoomHost="isRoomHost"></JoinRoomInputs>
    <Checkbox></Checkbox>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import JoinRoomInputs from "./JoinRoomInputs.vue";
import Checkbox from "./OnlyWithAudioCheckbox.vue";
const { useStore } = require("vuex");

let store = new useStore();
let props = defineProps({
  // roomId,
});
let isRoomHost = computed(() => {
  return store.state.isHost;
});
// let isRoomHost = store.state.isHost;
</script>

<style lang="less" scoped>
.join_room_inputs_container {
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;
}
</style>
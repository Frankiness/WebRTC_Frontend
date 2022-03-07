<template>
  <div class="join_room_title">{{ title }}</div>
</template>

<script setup>
const { computed, ref } = require("@vue/runtime-core");
import { defineProps } from "vue";
let props = defineProps({
  isRoomHost: String,
});
let title = computed(() => {
  return props.isRoomHost === "false" ? "加入会议" : "主持会议";
});

console.log(props.isRoomHost);
</script>

<style lang="less" scoped>
.join_room_title {
  font-size: 24px;
  font-weight: 700;
  margin-left: 35px;
  margin-top: 80px;
}
</style>
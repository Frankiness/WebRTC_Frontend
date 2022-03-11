<template>
  <div
    class="text-center"
    :class="[cancelButton ? cancelClassName : successClassName]"
  >
    {{ buttonText }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
let { buttonText, cancelButton } = defineProps({
  buttonText: {
    type: String,
  },
  cancelButton: {
    type: Boolean,
    default: false,
  },
});
// 动态class name
let cancelClassName = "join_room_cancel_button",
  successClassName = "join_room_success_button";
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.join_room_cancel_button {
  width: 80px;
  margin-right: 35px;
  height: 30px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  transition: 0.3s;
}

.join_room_cancel_button:hover {
  background-color: #e5e5e5;
}

.join_room_success_button {
  width: 80px;
  margin-right: 15px;
  height: 30px;
  background-color: #2d8cff;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  color: white;
  transition: 0.3s;
}

.join_room_success_button:hover {
  background-color: blue;
}
</style>

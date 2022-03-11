<template>
  <div class="error_message_container" v-show="msg">
    <span class="error_message_paragraph">{{ msg }}</span>
  </div>
</template>

<script setup>
import { defineProps, inject, toRef } from "vue";
let msg = inject("errorMessage");
console.log(msg);
</script>

<style lang="less" scoped>
.error_message_container {
  display: flex;
  height: 20px;
  margin: 10px 0 10px 35px;
}

.error_message_paragraph {
  color: rgb(209, 4, 4);
}
</style>

<template>
  <div class="error_message_container" v-show="errorMessage">
    <span class="error_message_paragraph">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
let { errorMessage } = defineProps(["errorMessage"]);
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

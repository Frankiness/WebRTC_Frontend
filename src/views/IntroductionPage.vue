<template>
  <div class="introduction_page_container">
    <div class="introduction_page_panel">
      <img src="../assets/images/logo.png" class="introduction_page_image" />
      <ConnectingButtons :buttonType="false"></ConnectingButtons>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ConnectingButtons from "../components/ConnectingButtons.vue";
onMounted(() => {
  let store = useStore();
  store.commit("setHost", false);
});
</script>

<style lang="less" scoped>
@import url("../assets/css/index.css");
.introduction_page_container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.introduction_page_panel {
  width: 600px;
  height: 400px;
  background-color: white;
  border: 1px solid grey;
  filter: drop-shadow(0 0 0.2rem grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.introduction_page_image {
  width: 400px;
}
</style>

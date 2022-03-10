<template>
  <div class="checkbox_container">
    <div class="checkbox_connection" @click="handleConnectionType">
      <img
        v-show="isOnlyAudio"
        class="checkbox_image"
        src="../../assets/images/check.png"
      />
    </div>
    <p class="checkbox_container_paragraph">只开启音频</p>
  </div>
</template>

<script setup>
const { computed } = require("@vue/runtime-core");
const { useStore } = require("vuex");

const store = useStore();
let isOnlyAudio = computed(() => {
  return store.state.isOnlyAudio;
});
// 选择是否开启视频连接
const handleConnectionType = () => {
  store.commit("setConnectionType", !isOnlyAudio.value);
};
</script>

<style lang="less" scoped>
.checkbox_container {
  display: flex;
  margin-left: 35px;
  // margin-top: 5px;
  align-items: center;
}

.checkbox_connection {
  width: 25px;
  height: 25px;
  background: #2d8cff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(80px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox_container_paragraph {
  font-weight: 400;
  font-size: 16px;
  margin-left: 15px;
}

.checkbox_image {
  max-width: 100%;
  max-height: 100%;
}
</style>

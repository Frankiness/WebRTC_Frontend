<template>
  <input
    class="join_room_input"
    v-if="isRoomHost === 'false'"
    type="text"
    placeholder="请输入会议ID号..."
    @change="handleRoomIdValue"
  />
  <input
    class="join_room_input"
    type="text"
    placeholder="请输入姓名..."
    @change="handleUsernameValue"
  />
</template>

<script setup>
const { useStore } = require("vuex");

let props = defineProps({
  isRoomHost: String,
});
let store = useStore();
// 获取用户输入的房间号
const handleRoomIdValue = (e) => {
  console.log(e.target.value);
  store.commit("setInputRoomId", e.target.value);
};
// 用户输入名字
const handleUsernameValue = () => {};
</script>

<style lang="less" scoped>
.join_room_input {
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  width: 300px;
  height: 40px;
  padding: 0px 15px;
}

.join_room_input:focus {
  border: 1px solid blue;
}
</style>
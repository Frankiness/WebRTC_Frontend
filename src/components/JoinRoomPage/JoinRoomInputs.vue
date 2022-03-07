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
    @change="handleRoomIdValue"
  />
</template>

<script setup>
let props = defineProps({
  roomIdValue: {
    type: String,
    default: "123",
  },
  // setRoomIdValue: String,
  nameValue: {
    type: String,
    default: "123",
  },
  // setNameValue: String,
  isRoomHost: String,
});
console.log(props.isRoomHost);
const handleRoomIdValue = (e) => {
  console.log(e.target.value);
};
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
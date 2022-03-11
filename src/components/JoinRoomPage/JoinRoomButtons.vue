<template>
  <div class="join_room_buttons_container">
    <JoinRoomButton
      :buttonText="successButtonType"
      :cancelButton="false"
      @click="handleButton"
    ></JoinRoomButton>
    <JoinRoomButton :buttonText="cancel" :cancelButton="true"></JoinRoomButton>
  </div>
</template>

<script setup>
import JoinRoomButton from "./JoinRoomButton.vue";
import { defineProps, inject, ref } from "vue";
import { getRoomExists } from "../../utils/api";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
let { isRoomHost } = defineProps({
  isRoomHost: {
    type: String,
  },
});
// button文本
let successButtonType = isRoomHost === "false" ? "主持" : "加入";
let cancel = "取消";

// 错误提示
let errorMessage = inject("errorMessage");

let store = useStore();
// 统一监听按钮
const handleButton = async () => {
  let inputRoomId = store.state.inputRoomId;
  // 判断是主持人还是普通用户
  if (isRoomHost === "true") {
    await createRoom(inputRoomId);
  } else {
    await joinRoom(inputRoomId);
  }
};
// 加入房间
const joinRoom = async (roomId) => {
  const res = await getRoomExists(roomId);
  console.log(res);
  const { roomExists, full } = res;
  if (roomExists) {
    if (full) {
      errorMessage.value = "会议房间人数已满";
    } else {
      // 进入房间
      router.push("/roomPage");
    }
  } else {
    errorMessage.value = "房间号不存在";
  }
};
// 创建房间
const createRoom = () => {};
</script>=>

<style lang="less" scoped>
.join_room_buttons_container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  // height: 100px;
}
</style>

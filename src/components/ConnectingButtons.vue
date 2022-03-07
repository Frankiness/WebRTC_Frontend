<template>
  <ConnectingButton
    :buttonText="joinTitle"
    :createRoomButton="false"
    @click="pushToRoomPage"
  ></ConnectingButton>
  <ConnectingButton
    :buttonText="createTitle"
    :createRoomButton="true"
    @click="pushToJoinRoomPage"
  ></ConnectingButton>
</template>

<script setup>
import { useRouter } from "vue-router";
import ConnectingButton from "./ConnectingButton.vue";

let router = useRouter();
let props = defineProps(["buttonType"]);

const pushToJoinRoomPage = () => {
  router.push("/joinRoomPage?host=true");
};
const pushToRoomPage = () => {
  router.push("/joinRoomPage?host=false");
};
let joinTitle = "加入会议",
  createTitle = "主持会议";
</script>

<style lang="less" scoped>
</style>'
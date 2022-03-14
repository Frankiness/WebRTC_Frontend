<template>
  <div class="participants_container">
    <div v-for="(item, index) in participants">
      <p class="participants_paragraph">{{ item.identity }}</p>
      <div
        class="participants_separator_line"
        v-if="index !== participants.length - 1"
      ></div>
    </div>
  </div>
</template>

<script setup>
import SingleParticipant from "./SingleParticipant.vue";
let participants = [
  {
    identity: "Jack",
  },
  {
    identity: "Rose",
  },
  {
    identity: "Summer",
  },
  {
    identity: "Tommy",
  },
];
</script>

<style lang="less" scoped>
.participants_container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: flex-start;
  height: 50%;
}
.participants_paragraph {
  color: black;
  text-align: start;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
  margin: 0 40px;
  padding: 10px 0px;
}

.participants_paragraph:hover {
  background-color: #e5e5e5;
  border-radius: 8px;
}
.participants_separator_line {
  width: calc(100% - 80px);
  height: 2px;
  background-color: #e5e5e5;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
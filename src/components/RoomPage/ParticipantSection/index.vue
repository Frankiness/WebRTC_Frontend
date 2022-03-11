<template>
  <div class="participants_section_container">
    <ParticipantLabel></ParticipantLabel>
    <Participants></Participants>
  </div>
</template>

<script setup>
import ParticipantLabel from "./ParticipantLabel.vue";
import Participants from "./Participants.vue";
</script>

<style lang="less" scoped>
.participants_section_container {
  height: 100%;
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
}
</style>
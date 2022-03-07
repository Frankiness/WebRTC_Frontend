<template>
  <div class="connecting_buttons_container">
    <button :class="[createRoomButton ? joinButton : createButton]">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
let props = defineProps({
  createRoomButton: Boolean,
  buttonText: String,
});
let joinButton = "join_room_button",
  createButton = "create_room_button";
</script>

<style lang="less" scoped>
.join_room_button {
  background-color: #2d8cff;
  border: 1px solid #e5e5e5;
  color: white;
  font-size: 13px;
  font-weight: 700;
  width: 180px;
  height: 30px;
  border-radius: 8px;
  transition: 0.3s;
}

.join_room_button:hover {
  background-color: blue;
}

.create_room_button {
  margin-top: 15px;
  background-color: white;
  border: 1px solid #e5e5e5;
  color: black;
  font-size: 13px;
  width: 180px;
  height: 30px;
  border-radius: 8px;
  transition: 0.3s;
}

.create_room_button:hover {
  background-color: #e5e5e5;
}
.connecting_buttons_container {
  display: flex;
  flex-direction: column;
}
</style>
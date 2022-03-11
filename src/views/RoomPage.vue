<template>
  <div class="room_container">
    <ParticipantSection></ParticipantSection>
    <VideoSection></VideoSection>
    <ChatSection></ChatSection>
    <RoomLabel :roomId="'1232'"></RoomLabel>
  </div>
</template>

<script setup>
import ChatSection from "../components/RoomPage/ChatSection/index.vue";
import ParticipantSection from "../components/RoomPage/ParticipantSection/index.vue";
import VideoSection from "../components/RoomPage/VideoSection/index.vue";
import RoomLabel from "../components/RoomPage/RoomLabel/index.vue";
import { useStore } from "vuex";

const store = useStore();
</script>
<style lang="less" scoped>
.room_container {
  width: 100%;
  height: 100vh;
  display: flex;
}

.new_message_container {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.new_message_input {
  border: 1px solid #d1dbe2;
  border-radius: 60px;
  padding: 0 50px 0px 20px;
  height: 60px;
  font-size: 16px;
  width: 80%;
  box-shadow: 2px 20px 5px rgba(0, 82, 201, 0.05);
}

.new_message_textarea:focus {
  outline: none;
}

.new_message_button {
  position: absolute;
  right: 10%;
}

.messages_container {
  width: calc(100% - 70px);
  margin-left: 30px;
  margin-right: 30px;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}

.message_container {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
}

.message_align_left {
  align-items: flex-start;
}

.message_align_right {
  align-items: flex-end;
}

.message_left_styles {
  background: rgba(0, 82, 201, 0.1);
  color: black;
}

.message_right_styles {
  background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
  color: white;
}

.message_title {
  margin: 0 0 10px 0;
  padding: 0 10px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  display: block;
}

.message_content {
  margin: 0px 10px;
  padding: 10px 30px 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  display: inline-block;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  background: rgba(0, 188, 164, 0.1);
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e5e5e5;
  border-radius: 10px;
}

.overlay_container {
  width: 100%;
  height: 100vh;
  background: rgba(0, 82, 201, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
}

.loader {
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #0052c9;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.local_screen_share_preview {
  position: absolute;
  width: 15%;
  height: 90%;
  background-color: black;
  border-radius: 8px;
  border: 2px solid blue;
  left: 1%;
  bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.participants {
  display: flex;
  width: 100%;
  height: 100%;
}

.participant {
  flex-grow: 1;
}

/* .identity {
        position: absolute;
        left: 0px;
        bottom: 15px;
        color: white;
        padding-left: 15px;
        box-sizing: border-box;
        z-index: 10;
      } */

.video {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.screen_share_track {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
}

.room {
  width: 100%;
  height: 100%;
}

video {
  width: 98%;
  height: 98%;
}

.video_track_container:first-child:nth-last-child(1) {
  width: 100%;
  height: 100%;
  position: relative;
}

.video_track_container:first-child:nth-last-child(2),
.video_track_container:first-child:nth-last-child(2) ~ .video_track_container {
  width: 50%;
  height: 50%;
  position: relative;
}

.video_track_container:first-child:nth-last-child(3),
.video_track_container:first-child:nth-last-child(3) ~ .video_track_container {
  width: 50%;
  height: 50%;
  position: relative;
}

.video_track_container:first-child:nth-last-child(4),
.video_track_container:first-child:nth-last-child(4) ~ .video_track_container {
  width: 50%;
  height: 50%;
  position: relative;
}

.video_track_container:first-child:nth-last-child(5),
.video_track_container:first-child:nth-last-child(5) ~ .video_track_container {
  width: 33%;
  height: 33%;
  position: relative;
}

.video_track_container:first-child:nth-last-child(6),
.video_track_container:first-child:nth-last-child(6) ~ .video_track_container {
  width: 33%;
  height: 33%;
}

.video_track_container:first-child:nth-last-child(7),
.video_track_container:first-child:nth-last-child(7) ~ .video_track_container {
  width: 33%;
  height: 33%;
}

.video_track_container:first-child:nth-last-child(8),
.video_track_container:first-child:nth-last-child(8) ~ .video_track_container {
  width: 33%;
  height: 33%;
}

.video_track_container:first-child:nth-last-child(9),
.video_track_container:first-child:nth-last-child(9) ~ .video_track_container {
  width: 33%;
  height: 33%;
}

.full_screen {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
}

.label_only_audio_container {
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: 0%;
}

.label_only_audio_container {
  font-size: 18px;
  color: black;
}

.direct_chat_container {
  height: 45%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.direct_chat_header {
  height: 50px;
  background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
  width: 95%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.direct_chat_header_paragraph {
  color: white;
  font-size: 16px;
}

.new_message_direct_border {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  width: 95%;
}

.direct_messages_container {
  flex-grow: 1;
  width: 95%;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.conversation_not_chosen_overlay {
  width: 95%;
  height: 86%;
  bottom: 0;
  left: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  position: absolute;
}

.conversation_not_chosen_overlay_text {
  font-size: 16px;
  font-weight: 700;
  color: black;
  margin-bottom: 80px;
}

.direct_message_container_author {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.direct_message_container_receiver {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.author_direct_message {
  background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
  float: right;
  border-radius: 8px 8px 0px 8px;
  padding: 13px;
  margin-right: 5px;
  color: white;
  display: inline;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  margin-left: 5px;
}

.receiver_direct_message {
  border-radius: 8px 8px 8px 0px;
  border: 1px solid #d5deeb;
  background: #ffffff;
  padding: 13px;
  float: left;
  margin-left: 5px;
  display: inline;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  margin-right: 5px;
}
</style>

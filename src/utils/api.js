import axios from "axios";

const serverApi = "http://localhost:5000/api";

export let getRoomExists = async (roomId) => {
  console.log(`roomId:${roomId}`);
  const res = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return res.data;
};

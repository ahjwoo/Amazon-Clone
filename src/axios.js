import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-1a0d7.cloudfunctions.net/api",
});

export default instance;

// "http://localhost:5001/clone-1a0d7/us-central1/api", // THE API URL

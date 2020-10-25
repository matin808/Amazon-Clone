import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-d16e8/us-central1/api", // API
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 5000,
});

export default instance;

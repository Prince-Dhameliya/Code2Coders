import axios from "axios";

const ServerApi = axios.create({
  baseURL: "https://c2c-server.onrender.com/",
  responseType: 'json',
});

export default ServerApi;

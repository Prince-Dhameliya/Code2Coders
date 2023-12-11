import axios from "axios";

const ServerApi = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "https://c2c-server.onrender.com/",
  responseType: 'json',
});

export default ServerApi;

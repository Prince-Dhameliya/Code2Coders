import socketio from "socket.io-client";

export const socket_global = socketio("ws://localhost:8900/");
// export const socket_global = socketio("https://c2c-socket.onrender.com/");

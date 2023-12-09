import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

export const appSocket = {
  socket: null,
  configure(userId) {
    const socket = io(SOCKET_URL);
    socket.emit('add-user', userId);
    this.socket = socket;
  },
  sendMessage(messageData) {
    this.socket.emit('send-msg', messageData);
  },
  onRecieveMessage(message) {
    this.socket.on('msg-recieve', message);
  },
};

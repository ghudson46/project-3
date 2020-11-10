// Dependencies
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

// User methods
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Router
const router = require('./router');

// Express app connects to server and socket
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

// on connection to socket.io
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  // runs when a message is sent
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  // Runs when user disconnects from room
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

// Server listening
server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
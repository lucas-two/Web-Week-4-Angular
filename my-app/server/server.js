
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./sockets.js');
const server = require('./listen.js');

// Defining port used by the server
const PORT = 3000;

// Applying express middleware
app.use(cors());

// Setting up socket
sockets.connect(io, PORT);

// Start server listening for requests
server.listen(http, PORT);





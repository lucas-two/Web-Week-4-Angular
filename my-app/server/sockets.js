module.exports = function(http){
  const io = require('socket.io')(http);

  io.on('connection', function(socket){
    console.log("A user connected");

    socket.emit('test event', 'here is some data');
  });
}

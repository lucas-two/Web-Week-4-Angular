const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const http = require('http').Server(app);
app.use(express.static(__dirname + 'view'));

let server = http.listen(3000, () =>{
  let port = server.address().port;
  console.log(`Listening on port ${chalk.green(port)}...`);

});

require('./route.js')(app,path);

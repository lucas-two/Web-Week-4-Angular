const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('http://localhost:4200'));

const http = require('http').Server(app);
let server = http.listen(3000, () =>{
  let port = server.address().port;
  console.log(`Listening on port ${port}...`);
});

require('./routes/api-login.js')(app);

const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

let server = http.listen(3000, () =>{
   let port = server.address().port;
   console.log(`Listening on port ${port}...`);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/my-app/')))

require('./routes/api-login.js')(app,path)
//require('./listen.js')(app,path);

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


// NOTE: I tried linking this to the angular components through 'src/app'
//       but it didn't seem to work. The 'dist/my-app' is not showing my actual
//       components.
app.use(express.static(path.join(__dirname, '../dist/my-app/')))


require('./routes/api-login.js')(app,path)


// NOTE: Was not sure how to create a seperate listen file, so I added it back
//       into server.js

//require('./listen.js')(app,path);

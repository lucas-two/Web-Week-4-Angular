const fs = require('fs');


module.exports = (app, path) => {
  const u = req.body.username;
  const p = req.body.password;
  c = u + p;
  console.log(c);
  fs.readFile('./server/data/users.json', 'utf8', (err, data) => {
    if(err) throw err;
    let userArray = JSON.parse(data);
    console.log(userArray);
    let i = userArray.findIndex(user =>
      ((user.username == u) && (user.password == p)));
      if (i == -1) {
        res.send({'ok': false});
      }
      else {
        console.log(userArray[i]);
        res.send({'ok': true});
      }
  });
}

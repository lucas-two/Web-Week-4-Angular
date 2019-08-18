module.exports = (app, path) => {
  app.get('/login', (req, res) => {
    let filepath = path.resolve('../dist/src/app/login/login.html');
    res.sendFile(filepath);
  });
}


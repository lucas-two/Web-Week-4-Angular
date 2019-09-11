module.exports = {
  listen: function(app, PORT) {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    })
  }
}

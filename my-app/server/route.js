class Users {
  constructor(username, birthdate, age, email, password, valid){
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid;
  }
}

module.exports = (app, path) => {
  app.get('/login', (req, res) => {
    let filepath = path.resolve('my-app/src/login/login.component.html');
    res.sendFile(filepath);
  });
  const user1 = new Users("Tom", "1/1/1992", 30, "a@email.com", "123", true);
  const user2 = new Users("Jess", "5/2/1984", 41, "abc@email.com", "123", true);
  const user3 = new Users("Lisa", "7/5/1974", 49, "cat@email.com", "123", true);
  const my_users = [user1, user2, user3];
}


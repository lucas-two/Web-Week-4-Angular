class Customer {
  constructor(email, username, birthdate, age, valid = false) {
    this.email = email;
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.valid = valid;
  }
}

// create an array of users.
module.exports = (app, path) => {
  let users = [
    {'email':'a@mail.com','pwd':'123','id':1,'username':'Alice','birthdate':'11-11-1964','age':50},
    {'email':'b@mail.com','pwd':'123','id':2,'username':'Bob','birthdate':'11-11-1964','age':24},
    {'email':'c@mail.com','pwd':'123','id':3,'username':'Connor','birthdate':'11-11-1964','age':76}
  ];

  // Return a 'Bad Request' message.
  if (!req.body) {
    return res.sendStatus(400);
  }

  // let customer = {};
  // customer.valid = false;
  // customer.email = '';
  // customer.username = '';
  // customer.birthdate = '';
  // customer.age = 0;

for (let i = 0; i < users.length; i++){

  // If we have a valid customer
  if (req.body.userEmail == users[i].email && req.body.userPwd == users[i].pwd){
      const customer_obj = new Customer(
      users[i].email,
      users[i].username,
      users[i].birthdate,
      true);
    // customer.valid = true;
    // customer.email = users[i].email;
    // customer.username = users[i].username;
    // customer.birthdate = users[i].birthdate;
    // customer.age = users[i].age;
    }
  }
  // Send the customer object on
  res.send(customer_obj);
}

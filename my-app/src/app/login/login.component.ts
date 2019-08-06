import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  LoginUser() {
    if (this.username === 'Admin' && this.password === '123') {
      alert('Welcome!');

    } else {
      alert('Bad password!');
    }
  }

}

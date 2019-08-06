import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  wrongPass: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  LoginUser() {
    if (
      this.email === 'admin@email.com' && this.password === 'a' ||
      this.email === 'tim@email.com' && this.password === 't' ||
      this.email === 'john@email.com' && this.password === 'j'
      ) {
      this.wrongPass = false;
      this.router.navigate(['/account/']);

    } else {
      this.wrongPass = true;
    }
  }

}

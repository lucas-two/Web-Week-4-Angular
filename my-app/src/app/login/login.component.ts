import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

class UserLoginDetails {
  constructor(email, pwd) {
    this.email = email;
    this.pwd = pwd;
  }
  email: string;
  pwd: string;
}

export class LoginComponent implements OnInit {

  userEmail: string;
  userPwd: string;
  userValid: boolean;

  // userValid: boolean;

  constructor(private router: Router, private httpClient: HttpClient) {}
  ngOnInit() {}

  public LoginUser() {
    this.httpClient.post(BACKEND_URL + '/login', [this.userEmail, this.userPwd], httpOptions)
      .subscribe((data: any) => {
        // alert(JSON.stringify(this.userEmail));
        if (data.valid) {
          // Store info
          console.log('good');
          this.userValid = true;
        } else {
          console.log('bad');
          this.userValid = false;
        }
      });
  }
}

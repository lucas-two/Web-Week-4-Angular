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

// class UserLoginDetails {
//   constructor(email, pwd) {
//     this.email = email;
//     this.pwd = pwd;
//   }
//   email: string;
//   pwd: string;
// }

export class LoginComponent implements OnInit {

  userEmail: string;
  userPwd: string;
  userValid: boolean;
  user = {};

  constructor(private router: Router, private httpClient: HttpClient) {}
  ngOnInit() {}

  public LoginUser() {
    this.user = { userEmail: this.userEmail, userPwd: this.userPwd};
    this.httpClient.post(BACKEND_URL + '/login', this.user)
      .subscribe((data: any) => {
        // alert(JSON.stringify(this.userEmail));
        if (data.valid) {
          // Store info
          console.log(data.age);
          this.userValid = true;
          this.router.navigateByUrl('/account/' + data.age);
        } else {
          console.log('bad');
          this.userValid = false;
        }
      });
    }
}

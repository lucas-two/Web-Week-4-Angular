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

export class LoginComponent implements OnInit {
  userpass: string;
  useremail: string;

  constructor(private router: Router, private httpClient: HttpClient) { }
  ngOnInit() {}

  public LoginUser() {
    this.httpClient.post(BACKEND_URL + '/login', this.userpass, httpOptions)
      .subscribe((data: any) => {
        alert(JSON.stringify(this.userpass));
        if (data.ok) {
          // Store info
        }
      });
  }

//   LoginUser_OLD(event) {
//     event.preventDefault();
//     for (const i in this.users) {
//       if (this.users[i].email === this.email && this.users[i].pwd === this.password) {
//         this.router.navigate(['/account']);
//       }
//     }
//   }
// }

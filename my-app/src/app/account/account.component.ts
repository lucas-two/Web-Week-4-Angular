import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  usernameUser = sessionStorage.getItem('usernameUser');
  idUser = sessionStorage.getItem('idUser');
  ageUser = sessionStorage.getItem('ageUser');
  birthdateUser = sessionStorage.getItem('birthdateUser');
  emailUser = sessionStorage.getItem('emailUser');

  constructor(private router: Router) {}

  ngOnInit() {}

  public EditProfile() {
    this.router.navigateByUrl('/profile/' + this.idUser);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usernameUser = sessionStorage.getItem('usernameUser');
  idUser = sessionStorage.getItem('idUser');
  ageUser = sessionStorage.getItem('ageUser');
  birthdateUser = sessionStorage.getItem('birthdateUser');
  emailUser = sessionStorage.getItem('emailUser');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public SaveProfile() {
    sessionStorage.setItem('usernameUser', this.usernameUser);
    sessionStorage.setItem('emailUser', this.emailUser);
    sessionStorage.setItem('ageUser', this.ageUser);
    sessionStorage.setItem('birthdateUser', this.birthdateUser);
    this.router.navigateByUrl('/account/' + this.idUser);
  }

  public CancelProfile() {
    this.router.navigateByUrl('/account/' + this.idUser);
  }
}


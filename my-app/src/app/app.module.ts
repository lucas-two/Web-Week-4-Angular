import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'account', component: AccountComponent },
      { path: 'welome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // usally for a 404 page not found.
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

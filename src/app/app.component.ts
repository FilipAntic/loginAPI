import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  email: string;
  password: string;
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXp5mCxZsg5cJ3GBdmFHq4jR2rj34TLh8",
      authDomain: "loginapi-4b4b2.firebaseapp.com"
    })
  }

  constructor(private auth: AuthService) { }
  onLogin() {
    this.auth.login();
  }
  onSignup() {
    this.email = "test@test.com";
    this.password = "pikos03101996";
    // this.auth.signup(this.email, this.password);
    this.auth.facebook();
  }


}

import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import * as firebase from 'firebase'
import { auth } from 'firebase';
@Injectable()
export class AuthService {
  token: string;
  provider = new firebase.auth.GoogleAuthProvider();
  facebookProvider = new firebase.auth.FacebookAuthProvider();
  auth0 = new auth0.WebAuth({
    clientID: 'Tcggq2C4KeSEu28x7iBY8cjAtfeQk6tW',
    domain: 'rafaton.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://rafaton.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  constructor() {
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  }

  login() {

    console.log(this.auth0)
    setTimeout(() => { this.auth0.authorize() }, 10000)
  }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      response => {
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            this.token = token;
          }
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  google() {
    firebase.auth().signInWithPopup(this.provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  facebook() {
    firebase.auth().signInWithPopup(this.facebookProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      (token: string) => {
        this.token = token;
      }
      )
    return this.token;
  }
}

prvo se radi:
npm install --save firebase
nakon toga se ode u appcomponent:
import * as firebase from 'firebase';
u metodi ngOnInit():

firebase.initializeApp({
      apiKey: "AIzaSyBXp5mCxZsg5cJ3GBdmFHq4jR2rj34TLh8",//ovde se stavlja odredjeni apiKey
      authDomain: "loginapi-4b4b2.firebaseapp.com" // ovde se stvalja domain
    })

Google:

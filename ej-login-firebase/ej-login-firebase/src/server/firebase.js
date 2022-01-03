import app from 'firebase/app';
import 'firebase/auth';
import *as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyC3HE7KzlUBgJlTSivpkYKs17TlLPF3e3w",
    authDomain: "home-87534.firebaseapp.com",
    projectId: "home-87534",
    storageBucket: "home-87534.appspot.com",
    messagingSenderId: "426036459195",
    appId: "1:426036459195:web:b91616f675acead217db9e",
    measurementId: "G-Q1WGPX1BN6"
  };

class Firebase{
    constructor(){
        // Initialize Firebase      
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }

}

export default Firebase;
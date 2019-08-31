import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;
  constructor() {
    const config = {
      apiKey: "AIzaSyCwmtbc9KUoaGAX6sk9CuZROD8hyP20ShA",
    authDomain: "blog-oc-8caee.firebaseapp.com",
    databaseURL: "https://blog-oc-8caee.firebaseio.com",
    projectId: "blog-oc-8caee",
    storageBucket: "gs://blog-oc-8caee.appspot.com/",
    messagingSenderId: "487143520342",
    appId: "1:487143520342:web:4815805a6ceb607c"
    };
    firebase.initializeApp(config);
  }
}

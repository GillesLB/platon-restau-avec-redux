import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyCF063iVE9sdkdwzrWjuF_REijod7ZBIPo',
      authDomain: 'platon-restau-9bc00.firebaseio.com',
      databaseURL: 'https://platon-restau-9bc00.firebaseio.com/',
      projectId: 'platon-restau-9bc00',
    };
    firebase.initializeApp(config);
  }
}

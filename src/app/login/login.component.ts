import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { webStorageModule } from 'angular-webstorage-master';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  name:any;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
      this.user = afAuth.authState;
}

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe(auth =>  {
      if (auth) {
        this.router.navigateByUrl('/profile');
      }
    });
  }

  session(){
    var frontastic = frontastic.module('frontastic', ['webStorageModule']);
    frontastic.controller('myController', function ($scope, webStorage) { });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('');
  }



  ngOnInit() {
  }

}

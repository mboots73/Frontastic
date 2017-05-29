import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
      this.user = afAuth.authState;
}
loginGoogle() {
  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

}
logout() {
  this.afAuth.auth.signOut();
}



  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string;
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    if (this.user !== null) {
    this.afAuth.authState.subscribe(( user: firebase.User) => {
    this.userName = user.displayName;
  })
};
}
  ngOnInit() {
  }

}

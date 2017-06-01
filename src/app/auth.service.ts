import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  private _user: firebase.User;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
  afAuth.authState.subscribe(user => this._user = user);
 }
  getUser(): firebase.User {
    return this._user;
  }

  setUser(value: firebase.User) {
    this._user = value;
    console.log(this._user);
  }

  get authenticated():boolean {
    return this._user !== null;
  }

  get id(): string {
    return this.authenticated ? this._user.uid: '';
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        this.db.object(`/users/${response.user.uid}`)
          .subscribe(user => {
            if (!user.$exists()) {
              let {displayName, email, emailVerified, photoURL, uid} = response.user;
              this.db.object(`/users/${response.user.uid}`).set({
                displayName,
                email,
                emailVerified,
                photoURL,
                uid
              })
            }
          });
      })
      .catch(err => console.log('ERRROR @ AuthService#signIn() :', err));
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
  }

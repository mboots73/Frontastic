import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase} from  'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { webStorageModule } from 'angular-webstorage-master';


@Injectable()
export class FirebaseService {

  profiles: FirebaseListObservable<any[]>;
  courses: FirebaseListObservable<any[]>;
  course: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  name: any;
  userName: string;
  userImage: any;
  userEmail: string;
  users: any;
  User: any;
  usersRef: any;
  currentUsers: any[];

  constructor(private afd: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    // console.log(this.user);
    if (this.user !== null) {
      this.afAuth.authState.subscribe((user: firebase.User) => {
        this.userName = user.displayName;
        this.userImage = user.photoURL;
        this.userEmail = user.email;

      });

    }


  }
  addUsers() {
      this.users.push({ username: this.userName, email: this.userEmail, role: 'user' });
  }

  getUsers() {
    this.users = this.afd.list('/users') as FirebaseListObservable<any[]>
    return this.users;
  }

  getCourses() {
    this.courses = this.afd.list('/courses') as FirebaseListObservable<any[]>
    return this.courses;
  }
  addCourse(course) {
    this.courses.push(course);
  }
  //drops all courses
   deleteCourse(item:any) {
      // this.courses.remove(this.courses.indexOf(item));

    }
    

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/profile');
      }
    });

  }

  session() {
    var frontastic = frontastic.module('frontastic', ['webStorageModule']);
    frontastic.controller('myController', function($scope, webStorage) { });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('');
  }

}

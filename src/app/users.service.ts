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
export class UsersService {


  user: Observable<firebase.User>;
  name: any;
  userName: string;
  userImage: any;
  userEmail: string;

  constructor(private afd: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
  var usersRef = this.afd.list('/users');
  console.log(usersRef);

  }
}

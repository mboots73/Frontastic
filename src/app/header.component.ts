import { Component, OnInit } from '@angular/core';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
      this.user = afAuth.authState;

}

  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('');
  }

}

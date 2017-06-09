import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
//import { LocalStorage, LocalStorageService} from "angular2-localstorage";
import * as firebase from 'firebase';
@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string;
  userImage: any;
  public userEmail: string;
  currentUserEmail: any;
  currentUser: any;
  dbRef: any;
  constructor(public fs: FirebaseService, public ls: LocalStorageService) {
    this.userName = this.fs.userName;
    this.userImage = this.fs.userImage;
    this.userEmail = this.fs.userEmail;

    let db = firebase.database();
    for (let i = 1; i < 4; i++) {

      this.dbRef = db.ref("/users/" + i).child('email');

      this.dbRef.on('value', function(snapshot) {

        let dbEmail = snapshot.val();
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let currentUserEmail = currentUser.email;
        if (dbEmail === currentUserEmail) {
          let rolRef = snapshot.ref.parent.child('role');
          rolRef.on('value', function(shapshot) {
            let rol = shapshot.val();
            localStorage.setItem('currentUserNew', JSON.stringify({ role: rol }));
          });

        }


      });
    }
  }

  ngOnInit() {
  }

}

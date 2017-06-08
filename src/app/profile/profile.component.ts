import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {LocalStorage, LocalStorageService} from "angular2-localstorage";
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
    dbRef:any;
    public rol:any;
  constructor(public fs: FirebaseService, public ls: LocalStorageService) {
    let funcs: any[];
    this.userName = this.fs.userName;
    this.userImage = this.fs.userImage;
     this.userEmail = this.fs.userEmail;

    //  console.log(this.currentUserEmail);
     let db = firebase.database();
     for (let i = 1 ; i < 4 ; i++) {
    //  this.dbRef = db.ref("/users/" + i).child('role');
     this.dbRef = db.ref("/users/" + i).child('email');
     console.log(this.dbRef);
     console.log(i);
          this.dbRef.on('value', function(snapshot) {
    //     let rol = snapshot.val();
      let dbEmail = snapshot.val();
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       let currentUserEmail =  currentUser.email;
      if (dbEmail ===  currentUserEmail) {
        console.log(true);
        let rolRef = snapshot.ref.parent.child('role');
        rolRef.on('value', function(shapshot) {
          let rol = shapshot.val();
            localStorage.setItem('currentUserNew', JSON.stringify({role: rol}));
        });

              }


      // localStorage.setItem('currentUser' + i, JSON.stringify({role: rol}));

    });
   }
}

  ngOnInit() {
  }

}

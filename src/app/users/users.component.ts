import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private fs: FirebaseService, public afAuth: AngularFireAuth ) {


  }

  ngOnInit() {
    this.fs.getUsers().subscribe(users => {
      this.users = users;
          if (this.users[0].email === this.afAuth.auth.currentUser.email ) {
            console.log("this user already exists");
          }
          else if (this.users[0].email !== this.afAuth.auth.currentUser.email) {
            //  this.fs.addUsers();

          }
          // console.log(this.users[0].email === this.afAuth.auth.currentUser.email);
          // console.log(this.users[0].email);
          // console.log(this.afAuth.auth.currentUser.email);
    });

  }

}

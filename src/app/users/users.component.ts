import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private fs: FirebaseService) {
  }

  ngOnInit() {
    this.fs.getUsers().subscribe(users => {
      this.users = users;
    });

  }

}

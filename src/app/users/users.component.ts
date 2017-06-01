import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profiles: any;
  constructor(private fs: FirebaseService) {
  }

  ngOnInit() {
    this.fs.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
    });

  }

}

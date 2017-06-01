import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string;
  userImage: any;
  userEmail: string;
  constructor(public fs: FirebaseService) {
    this.userName = this.fs.userName;
    this.userImage = this.fs.userImage;
    this.userEmail = this.fs.userEmail;


}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Student: boolean;
  public Editor: boolean;
  public Admin: boolean;
  constructor(private fs: FirebaseService) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentRole = currentUser.role
    if (currentRole === 'admin') {
      this.Admin = true
      this.Editor = false;
      this.Student = false;
    }
    else if (currentRole === 'editor') {
      this.Editor = true;
      this.Student = false;
      this.Admin = false;
    }
    else {
      this.Student = true;
      this.Admin = false;
      this.Editor = false;
    }
  }

  ngOnInit() {
  }
  logout() {
    this.fs.logout();
  }

}

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

}
isStudent():boolean {
  this.Student = true;
  this.Editor = false;
  this.Admin = false;
    console.log (this.Student , this.Editor, this.Admin);
  return this.Student;
}

isAdmin():boolean {
  this.Student = false;
  this.Editor = false;
  this.Admin = true;
    console.log (this.Student , this.Editor, this.Admin);
  return this.Admin;
}

isEditor():boolean {
  this.Student = false;
  this.Editor = true;
  this.Admin = false;
  console.log (this.Student , this.Editor, this.Admin);
  return this.Editor;

}
  ngOnInit() {
  }
  logout() {
      this.fs.logout();
      }

}

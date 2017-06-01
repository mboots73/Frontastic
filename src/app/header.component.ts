import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fs: FirebaseService) {

}

  ngOnInit() {
  }
  logout() {
      this.fs.logout();
      }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase} from  'angularfire2/database';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profiles: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
  this.profiles = af.list('/profiles');
  }

  ngOnInit() {
  }

}

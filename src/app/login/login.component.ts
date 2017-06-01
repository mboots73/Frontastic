import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from  'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { webStorageModule } from 'angular-webstorage-master';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fs: FirebaseService) {

  }
  loginGoogle() {
    this.fs.loginGoogle();
  }
  session() {
    var frontastic = frontastic.module('frontastic', ['webStorageModule']);
    frontastic.controller('myController', function($scope, webStorage) { });
  }
  ngOnInit() {

  }

}

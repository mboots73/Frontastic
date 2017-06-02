import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase} from  'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import * as functions from 'firebase-functions'
import * as firebase from 'firebase';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;
  @Input() imageurl: string;
  @Input() description: string;
  @Input() lesson1: string;
  @Input() lesson2: string;
  @Input() lesson3: string;
  @Input() lesson1url: string;
  @Input() imageurlprogress: string;
  @Input() imageurldone: string;
  constructor(private af: AngularFireDatabase) {

  }


  ngOnInit() {
    var name = this.name;
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var emberRef = imagesRef.child(name + '.png');
    var emberPath = emberRef.getDownloadURL().then(function(url) {
      // var downLoadUrl = url;
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
}


  progressImage() {
    var name = this.name;
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var imageRef = imagesRef.child(name + '-inprogress.png');
    var imagePath = imageRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })

  }
  finishedImage() {
    var name = this.name;
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var imageRef = imagesRef.child(name + '-done.png');
    var imagePath = imageRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;

  })

}
}

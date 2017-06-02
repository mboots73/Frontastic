import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import * as firebase from 'firebase';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html'
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var htmlRef = imagesRef.child('html.png');
    var htmlPath = htmlRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
}
}

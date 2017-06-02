import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html'
})
export class JavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var jvsRef = imagesRef.child('javascript.png');
    var jvsPath = jvsRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
  }
  }

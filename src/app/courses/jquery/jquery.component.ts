import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html'
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var jqRef = imagesRef.child('jquery.png');
    var jqPath = jqRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
  }
  }

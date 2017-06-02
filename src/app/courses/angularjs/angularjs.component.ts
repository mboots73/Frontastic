import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html'
})
export class AngularjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var angularRef = imagesRef.child('angularjs.png');
    var angularPath = angularRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
}
}

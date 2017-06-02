import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html'
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var cssRef = imagesRef.child('css.png');
    var cssPath = cssRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
}
}

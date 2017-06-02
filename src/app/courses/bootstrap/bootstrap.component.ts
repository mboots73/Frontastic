import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var bootstrapRef = imagesRef.child('bootstrap.png');
    var bootstrapPath = bootstrapRef.getDownloadURL().then(function(url) {
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })
}
}

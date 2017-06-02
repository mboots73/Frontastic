import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-emberjs',
  templateUrl: './emberjs.component.html'
})
export class EmberjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');
    var emberRef = imagesRef.child('emberjs.png');
    var emberPath = emberRef.getDownloadURL().then(function(url) {
      // var downLoadUrl = url;
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
  })

}
}

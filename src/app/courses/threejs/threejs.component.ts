import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html'
})
export class ThreejsComponent implements OnInit {
  downLoadUrl: any;
  constructor(private fs: FirebaseService) {

  }

  ngOnInit() {
    var storageRef = firebase.storage().ref();
    console.log(firebase.storage().ref().child('images').child('threejs.png'));
    var imagesRef = storageRef.child('images');
    var threeRef = imagesRef.child('threejs.png');
    var threePath = threeRef.getDownloadURL().then(function(url){
      // var downLoadUrl = url;
      var img = <HTMLInputElement>document.getElementById('myImage');
      img.src = url;
      // console.log(downLoadUrl);
    });


  }

}

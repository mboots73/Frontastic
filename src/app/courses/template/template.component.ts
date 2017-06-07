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
  courses: any;
  constructor(private af: AngularFireDatabase, private fs: FirebaseService) {
    this.fs.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }


  ngOnInit() {

  }


  progressImage() {
    var name = this.name;
    let db = firebase.database();
    db.ref("courses/" + this.name + "/imageurl").set("/assets/" + this.name + "-inprogress.png");
    this.updateProgressEnroll()

  }
  finishedImage() {
    var name = this.name;
    let db = firebase.database();
    db.ref("courses/" + this.name + "/imageurl").set("/assets/" + this.name + "-done.png");
    this.updateProgressFinish()
  }
  updateProgressEnroll() {
    var name = this.name;
    let db = firebase.database();
    db.ref("courses/" + this.name + "/progress").set("10");
    console.log("updated the progress to 10% for", this.name);

  }
  updateProgressFinish() {
    var name = this.name;
    let db = firebase.database();
    db.ref("courses/" + this.name + "/progress").set("100");
    console.log("updated the progress to 100% for", this.name);


  }

}

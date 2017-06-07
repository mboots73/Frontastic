import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html'
})
export class HtmlComponent implements OnInit {
courses:any
html:any;
name:any;
category:any;
description:any;
lesson1:any;
lesson2:any;
lesson1url:any;
image:any;
  constructor(private fs: FirebaseService) {
    this.fs.getCoursesAll().subscribe(courses => {
      this.courses = courses;
      this.html = this.courses[4];
  this.name = this.html.name;
  this.category = this.html.category;
  this.description = this.html.explanation;
  this.lesson1 = this.html.lesson1;
  this.lesson2 = this.html.lesson2;
  this.lesson1url = this.html.lesson1url;
  this.image = this.html.imageurl;
    });

}
  ngOnInit() {

}

}

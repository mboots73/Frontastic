import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html'
})
export class JavascriptComponent implements OnInit {

  courses:any
  js:any;
  name:any;
  category:any;
  description:any;
  lesson1:any;
  lesson2:any;
  lesson1url:any;
  image:any;
    constructor(private fs: FirebaseService) {
      this.fs.getCourses().subscribe(courses => {
        this.courses = courses;
        this.js = this.courses[5];
    this.name = this.js.name;
    this.category = this.js.category;
    this.description = this.js.explanation;
    this.lesson1 = this.js.lesson1;
    this.lesson2 = this.js.lesson2;
    this.lesson1url = this.js.lesson1url;
    this.image = this.js.imageurl;
      });

  }
  ngOnInit() {

  }
  }

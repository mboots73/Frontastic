import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html'
})
export class ThreejsComponent implements OnInit {

  courses:any
  ts:any;
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
        this.ts = this.courses[6];
    this.name = this.ts.name;
    this.category = this.ts.category;
    this.description = this.ts.explanation;
    this.lesson1 = this.ts.lesson1;
    this.lesson2 = this.ts.lesson2;
    this.lesson1url = this.ts.lesson1url;
    this.image = this.ts.imageurl;
      });

  }
  ngOnInit() {

  }
  }

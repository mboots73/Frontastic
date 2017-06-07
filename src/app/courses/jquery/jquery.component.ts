import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html'
})
export class JqueryComponent implements OnInit {

  courses:any
  jq:any;
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
        this.jq = this.courses[7];
    this.name = this.jq.name;
    this.category = this.jq.category;
    this.description = this.jq.explanation;
    this.lesson1 = this.jq.lesson1;
    this.lesson2 = this.jq.lesson2;
    this.lesson1url = this.jq.lesson1url;
    this.image = this.jq.imageurl;
      });

  }
  ngOnInit() {

  }
  }

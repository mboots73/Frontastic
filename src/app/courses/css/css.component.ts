import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html'
})
export class CssComponent implements OnInit {

  courses:any
  css:any;
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
        this.css = this.courses[2];
    this.name = this.css.name;
    this.category = this.css.category;
    this.description = this.css.explanation;
    this.lesson1 = this.css.lesson1;
    this.lesson2 = this.css.lesson2;
    this.lesson1url = this.css.lesson1url;
    this.image = this.css.imageurl;
      });

  }
  ngOnInit() {

  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-emberjs',
  templateUrl: './emberjs.component.html'
})
export class EmberjsComponent implements OnInit {

  courses:any
  ember:any;
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
        this.ember = this.courses[3];
    this.name = this.ember.name;
    this.category = this.ember.category;
    this.description = this.ember.explanation;
    this.lesson1 = this.ember.lesson1;
    this.lesson2 = this.ember.lesson2;
    this.lesson1url = this.ember.lesson1url;
    this.image = this.ember.imageurl;
      });

  }
  ngOnInit() {

  }
}

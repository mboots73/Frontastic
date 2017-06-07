import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html'
})
export class AngularjsComponent implements OnInit {

  courses:any
  angular:any;
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
        this.angular = this.courses[0];
    this.name = this.angular.name;
    this.category = this.angular.category;
    this.description = this.angular.explanation;
    this.lesson1 = this.angular.lesson1;
    this.lesson2 = this.angular.lesson2;
    this.lesson1url = this.angular.lesson1url;
    this.image = this.angular.imageurl;
      });

  }
  ngOnInit() {

  }
}

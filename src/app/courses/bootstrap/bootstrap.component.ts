import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent implements OnInit {


    courses:any
    bootstrap:any;
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
          this.bootstrap = this.courses[1];
      this.name = this.bootstrap.name;
      this.category = this.bootstrap.category;
      this.description = this.bootstrap.explanation;
      this.lesson1 = this.bootstrap.lesson1;
      this.lesson2 = this.bootstrap.lesson2;
      this.lesson1url = this.bootstrap.lesson1url;
      this.image = this.bootstrap.imageurl;
        });

    }
    ngOnInit() {

    }
  }

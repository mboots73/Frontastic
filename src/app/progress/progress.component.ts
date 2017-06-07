import { Component, OnInit, Input } from '@angular/core';
import { Course  } from '../courses/course';
import {FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress: any;
  courses: any;
  icourses: any;
  constructor(private fs: FirebaseService) {
  }

  ngOnInit() {
      this.fs.getCoursesSpecific().subscribe(courses => {
      this.courses = courses;
    });
  }

}

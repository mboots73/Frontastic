import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Course } from '../course';
import { FirebaseService } from '../../firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})

export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  courseId: number;
  courses: any;
  Student: any;
  Editor: any;
  Admin: any;
  constructor(private fs: FirebaseService) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentRole = currentUser.role
    if (currentRole === 'admin') {
      this.Admin = true
      this.Editor = false;
      this.Student = false;
    }
    else if (currentRole === 'editor') {
      this.Editor = true;
      this.Student = false;
      this.Admin = false;
    }
    else {
      this.Student = true;
      this.Admin = false;
      this.Editor = false;
    }

  }

  ngOnInit() {
    this.fs.getCoursesSpecific().subscribe(courses => {
      this.courses = courses;
    });
  }
  deleteCourse(item) {
    let db = firebase.database();
    db.ref("courses/" + item).remove();

  }

}

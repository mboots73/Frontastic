import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Course } from '../course';
import { FirebaseService } from '../../firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
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
  users: any;
  isStudent: any;
  isEditor: any;
  isAdmin: any;
  constructor(private fs: FirebaseService, public afAuth: AngularFireAuth) {
    this.fs.getUsers().subscribe(users => {
      this.users = users;
      this.isStudent = this.users[0].role === 'student';
      this.isAdmin = this.users[0].role === 'admin';
      this.isEditor = this.users[0].role === 'editor';
    })
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

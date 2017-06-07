import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Course } from '../course';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  courseId: number;
  courses:any;

  constructor(private fs: FirebaseService) {
  }

  ngOnInit() {
    this.fs.getCourses().subscribe(courses => {
    this.courses = courses;
  });
}
  deleteCourse(item) {
     this.fs.deleteCourse(item);
   }

}

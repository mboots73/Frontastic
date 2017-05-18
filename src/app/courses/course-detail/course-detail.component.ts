import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
  @Input() selectedCourse: Course;
  constructor() { }

  ngOnInit() {
  }


}

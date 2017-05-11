import { Component, OnInit } from '@angular/core';
import {Course } from './course';
@Component({
  selector: 'course-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course;
  constructor() { }

  ngOnInit() {
  }

}

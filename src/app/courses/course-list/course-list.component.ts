import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseItemComponent } from './course-item.component';


@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }


}
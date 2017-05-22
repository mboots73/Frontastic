import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from './courses/course.service';
import {Course } from './courses/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() course: Course;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }
  addCourse(input) {
    const newCourse = new Course(input, 'This course is about: ' + input, '/assets/'+input+'.png','/courses/'+input, '0');
    this.courseService.addCourse(newCourse);
    console.log(this.courseService.getCourses().length)
  }
}

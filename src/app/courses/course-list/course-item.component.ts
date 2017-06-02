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

  constructor(private fs: FirebaseService) { }

  ngOnInit() {
  }
  deleteCourse() {
    this.fs.deleteCourse();
  }

}

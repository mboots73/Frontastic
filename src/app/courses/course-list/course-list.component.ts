import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { CourseItemComponent } from './course-item.component';


@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

courses:any;
  constructor(private fs: FirebaseService) { }
  ngOnInit() {
      this.fs.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}

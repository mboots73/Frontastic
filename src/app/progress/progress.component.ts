import { Component, OnInit, Input } from '@angular/core';
import { Course  } from '../courses/course';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
@Input() course: Course;
  courseId: number;
  constructor() { }

  ngOnInit() {
  }

}

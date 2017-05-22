import { Component, OnInit, Input } from '@angular/core';
import { Course  } from '../courses/course';
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  courses = [ {name: 'HTML', progress: '1000'},
  {name: 'CSS', progress: '50'},
  {name: 'JavaScript', progress: '0'},
    {name: 'jQuery', progress: '0'}
];
icourses = [ {name: 'Angular.js', progress: '0'},
{name: 'Three.js', progress: '0'},
{name: 'Ember.js', progress: '0'},
  {name: 'Bootstrap', progress: '0'}
];
  constructor() { }

  ngOnInit() {
  }

}

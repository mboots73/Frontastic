import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseService {
  public courses: Course[] = [

    new Course('HTML', 'Language for creating web-pages','/assets/html.png', '/courses/html', '50'),
    new Course('CSS', 'Language to style web-pages', '/assets/css.png', '/courses/css', '0'),
    new Course('JavaScript', 'Language to make web-pages interactive', '/assets/javascript.png', '/courses/javascript',  '0'),
    new Course('jQuery', 'A JavaScript library', '/assets/jquery.png', '/courses/jquery',  '0'),
    new Course('Angular.js', 'A JavaScript MVC framework', '/assets/angularjs.png', '/courses/angularjs', '0'),
    new Course('Three.js', 'A JavaScript 3D library', '/assets/threejs.png', '/courses/threejs', '0'),
    new Course('Ember.js', 'A JavaScript MVVM framework', '/assets/emberjs.png', '/courses/emberjs',  '0'),
    new Course('Bootstrap', 'A framework with HTML/CSS templates', '/assets/bootstrap.png', '/courses/bootstrap',  '0')
  ];
  constructor() { }

  getCourses() {
    return this.courses;
  }
  addCourse(hoi) {
  this.courses.push(hoi);
  }
}

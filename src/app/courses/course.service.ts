import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseService {
  public courses: Course[] = [

    new Course('HTML', 'Language for creating web-pages','/assets/html.png', '/courses/html', '50'),
    new Course('CSS', 'Language to style web-pages', '/assets/css.png', '/courses/css', '0'),
    new Course('JavaScript', 'Language to make web-pages interactive', '/assets/javascript-geel.png', '/courses/javascript',  '0'),
    new Course('jQuery', 'A JavaScript library', '/assets/jquery.png', '/courses/jquery',  '0'),
    new Course('Angular.js', 'A JavaScript MVC framework', '/assets/angular.png', '/courses/angularjs', '0'),
    new Course('Three.js', 'A JavaScript 3D library', '/assets/threejs.png', '/courses/threejs', '0'),
    new Course('Ember.js', 'A JavaScript MVVM framework', '/assets/Emberjs.png', '/courses/emberjs',  '0'),
    new Course('Bootstrap', 'A framework with HTML/CSS templates', '/assets/bootstrap.png', '/courses/bootstrap',  '0'),
    new Course('Add a new course', ' ', '/assets/newcourse.png', '/courses/newcourse', '0')
  ];
  constructor() { }

  getCourses() {
    return this.courses;
  }
}

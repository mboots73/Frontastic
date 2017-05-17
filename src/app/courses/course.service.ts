import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable()
export class CourseService {
  private courses: Course[] = [

    new Course('HTML', 'Language for creating web-pages', 'http://w3widgets.com/responsive-slider/img/html5.png', '/courses/html', '80'),
    new Course('CSS', 'Language to style web-pages', 'https://techchurian.files.wordpress.com/2013/02/css3-logo.png', '/courses/css', '0'),
    new Course('Javascript', 'Language to make web-pages interactive', 'https://lh6.ggpht.com/qkztq4tWAPIfgfld8l0er0jDyprt6KVq61ZI-2DDhtkgvWmA7HjY2mjTxqn93VYJdsI=w300-rw', '/courses/javascript',  '0'),
    new Course('jQuery', 'A Javascript library', 'http://www.mangooranges.com/wp-content/uploads/2007/08/jquery_avatar_400x4001.png', '/courses/jquery',  '0'),
    new Course('Angular.js', 'A Javascript MVC framework', 'https://lh5.ggpht.com/jmf9wX16pWQWHFe7Polc1b_FjBkQIkpqwSIvyuCgOwn4M3akBLpkveqJXKy3PGHjAzk=h310-rw', '/courses/angularjs', '0'),
    new Course('Three.js', 'A Javascript 3D library', 'http://www.weblisty.net/img/threejs-logo.png', '/courses/threejs', '0'),
    new Course('Ember.js', 'A Javascript MVVM framework', 'https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png', '/courses/emberjs',  '0'),
    new Course('Bootstrap', 'A framework with HTML/CSS templates', 'http://w3widgets.com/responsive-slider/img/bootstrap.png', '/courses/bootstrap',  '0')
  ];
  constructor() { }

  getCourses() {
    return this.courses;
  }
}

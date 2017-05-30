import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase} from  'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import * as functions from 'firebase-functions'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;
  @Input() urlName: string;
  @Input() description: string;
  @Input() lesson1: string;
  @Input() lesson2: string;
  @Input() lesson3: string;
  @Input() urlLesson1: string;
  @Input() progressUrl: string;
  @Input() finishedUrl: string;
  html:string;
  htmlname:string;

  courses: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) {
    const courses: FirebaseListObservable<any> = af.list('courses');
    const course = af.object('courses/html');
      course.subscribe(console.log);

  }


  ngOnInit() {
  }
  progressImage() {
  document.getElementById('myImage').setAttribute('src', this.progressUrl);

  }
  finishedImage() {
  document.getElementById('myImage').setAttribute('src', this.finishedUrl);

  }

}

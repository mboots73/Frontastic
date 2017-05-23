import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

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
  @Input() urlLesson1: string;
  @Input() progressUrl: string;
  @Input() finishedUrl: string;
  constructor() { }

  ngOnInit() {
  }
  progressImage() {
  document.getElementById('myImage').setAttribute('src', this.progressUrl);

  }
  finishedImage() {
  document.getElementById('myImage').setAttribute('src', this.finishedUrl);

  }

}

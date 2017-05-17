import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  public urlName =  'http://w3widgets.com/responsive-slider/img/html5.png';
  constructor() { }

  ngOnInit() {
  }


}

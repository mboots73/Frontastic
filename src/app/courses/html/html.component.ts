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
  public name= "HTML";
    public category= "WebStructure";
    public description = "  In this course you will learn the basics of HTML. Hypertext Markup Language(HTML) is the standard language for creating web-pages with the goal to define the structure of it. HTML works with so-called tags that describe the different elements in your document. Mostly HTML is combined with CSS and JavaScript, which will be covered in other courses."
    public lesson1 =  "Structure"
    public lesson2 = "HTML Elements"
  constructor() { }

  ngOnInit() {
  }


}

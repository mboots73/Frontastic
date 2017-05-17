import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  public urlName =  'http://w3widgets.com/responsive-slider/img/html5.png';
  public name= "CSS";
    public category= "WebDesign";
    public description = " "
    public lesson1 =  "Selectors"
    public lesson2 = "FlexBox"
  constructor() { }

  ngOnInit() {
  }

}

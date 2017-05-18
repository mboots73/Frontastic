import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  styleUrls: ['./tab.component.css'],
  templateUrl:'./tab.component.html'
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}

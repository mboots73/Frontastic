import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user =  {
    name: '',
    email: '',
    username: '',
    password: '',
    profilepicture: ''
  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(this.user);
  }

}

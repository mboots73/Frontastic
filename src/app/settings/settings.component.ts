import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
public fileString;
public  user =  {
    name: '',
    email: '',
    username: '',
    password: '',
    profilepicture: ''
  };

  constructor() {   this.fileString;}

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(this.user);
    console.log(form.valid)
  }
  changeListener($event):void {
    this.readThis($event.target);
  }
  readThis(inputValue:any):void {
    var file:File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
        this.user.profilepicture = myReader.result;
        document.getElementById('profile-img-tag').setAttribute('src', myReader.result);

    }
    myReader.readAsDataURL(inputValue.files[0]);
  }

}

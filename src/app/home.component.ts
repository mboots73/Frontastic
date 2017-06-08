import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from './firebase.service';
import {Course } from './courses/course';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() course: Course;
  users: any;
  public Student: boolean;
  public Editor: boolean;
  public Admin: boolean;
  public newcourse = {
    input: '',
    coursepicture: ''
  };

  constructor(private fs: FirebaseService, public afAuth: AngularFireAuth) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentRole = currentUser.role
    if (currentRole === 'admin') {
      this.Admin = true
      this.Editor = false;
      this.Student = false;
    }
    else if (currentRole === 'editor') {
      this.Editor = true;
      this.Student = false;
      this.Admin = false;
    }
    else {
      this.Student = true;
      this.Admin = false;
      this.Editor = false;
    }
  }

  ngOnInit() {
  }

  addCourse(input, coursepicture) {
    const newCourse = new Course('category', 'This course is about: ' + input, 'explanation', coursepicture,
      'lesson1', '/courses/' + input + '/lesson1', 'lesson2', input, '0', '/courses/' + input);
    this.fs.addCourse(newCourse);
    console.log(input)
  }

  onSubmit(form: NgForm) {
    console.log(form.valid)
    console.log(this.newcourse)
  }
  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {

    var file: File = inputValue.files[0];
    var storageRef = firebase.storage().ref('images/' + file.name);
    var task = storageRef.put(file);
    var myReader: FileReader = new FileReader();
    var fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
      console.log(this.newcourse.coursepicture = myReader.result);
    }
    myReader.readAsDataURL(inputValue.files[0]);
  }

}

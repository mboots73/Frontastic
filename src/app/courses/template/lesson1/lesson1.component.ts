import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  questions = [
   {"questionText": "Which statement should be entered at the first line?", "answers": [
     {"answerText":"<!DOCTYPE html>", "correct": true},
     {"answerText":"<DOCTYPE html>", "correct": false},
     {"answerText":" !DOCTYPE html", "correct": false}
     ]},
   {"questionText": "HTML uses so called tags; they come in pairs, how are these pairs called?", "answers": [
     {"answerText":"key/value tags", "correct": false},
     {"answerText":"opening/closing tags", "correct": true},
     {"answerText":"pair tags", "correct": false}
     ]},
   {"questionText": "What can be specified in the head part of an html?", "answers": [
     {"answerText":"the body", "correct": false},
     {"answerText":"information that is directly displayed on the actual page", "correct": false},
     {"answerText":"information that isn't directly displayed on the actual page", "correct": true}
     ]},
   {"questionText": "Using which tag(s) you can add a title to your web-page?", "answers": [
     {"answerText":"<title> + </title>", "correct": true},
     {"answerText":"<title/>", "correct": false},
     {"answerText":"<title>", "correct": false}
     ]}
 ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  correctCount:number = 0;
  qlength:number;
  answers:any[];

  constructor() { }

  ngOnInit() {
  }
  showResult() {
    this.correctCount = 0;
    this.qlength = this.questions.length;
    for (var i = 0; i <this.qlength; i++) {
      this.answers = this.questions[i].answers;
      this.questions[i].userAnswerCorrect = false;

      for (var j = 0; j <this.answers.length; j++) {
        this.questions[i].userAnswer = this.answers[j].answerText;
        this.answers[j].selected = "dunno";
        if (this.questions[i].userAnswer === this.answers[j].answerText && this.answers[j].correct === true) {

          this.questions[i].userAnswerCorrect = true;
            this.answers[j].selected = "true";
            this.correctCount = this.correctCount + 1;
        }
        else if(this.questions[i].userAnswer === this.answers[j].answerText && this.answers[j].correct === false) {
            this.answers[j].selected = "false";
        }
      }

    }
  }
  questions = [
   {"questionText": "Which statement should be entered at the first line?", "userAnswer": "hoi", "userAnswerCorrect": false,"answers": [
     {"answerText":"<!DOCTYPE html>", "correct": true},
     {"answerText":"<DOCTYPE html>", "correct": false},
     {"answerText":" !DOCTYPE html", "correct": false}
     ]},
   {"questionText": "HTML uses so called tags; they come in pairs, how are these pairs called?", "userAnswer": "hoi", "userAnswerCorrect": false,"answers": [
     {"answerText":"key/value tags", "correct": false},
     {"answerText":"opening/closing tags", "correct": true},
     {"answerText":"pair tags", "correct": false}
     ]},
   {"questionText": "What can be specified in the head part of an html?", "userAnswer": "hoi", "userAnswerCorrect": false, "answers": [
     {"answerText":"the body", "correct": false},
     {"answerText":"information that is directly displayed on the actual page", "correct": false},
     {"answerText":"information that isn't directly displayed on the actual page", "correct": true}
     ]},
   {"questionText": "Using which tag(s) you can add a title to your web-page?", "userAnswer": "title", "userAnswerCorrect": false, "answers": [
     {"answerText":"<title> + </title>", "correct": true},
     {"answerText":"<title/>", "correct": false},
     {"answerText":"<title>", "correct": false}
     ]}
 ];
}

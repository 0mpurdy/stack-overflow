import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fp-pvq',
  templateUrl: './fp-pvq.component.html',
  styleUrls: ['./fp-pvq.component.css']
})
export class FpPVQ implements OnInit {

  private pvqForm: FormGroup;
  private questionGroups: FormArray;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.questionGroups = this.fb.array(this.getQuestions().map(question => this.fb.group(question)));

    this.pvqForm = this.fb.group({
      questions: this.questionGroups
    });

    console.log(this.pvqForm);
  }

  getQuestions() {
    const questionControlArray = [];
    for (let i = 0; i < 20; i++) {
      questionControlArray.push({ question: ['', Validators.required], answer: [''] });
    }
    return questionControlArray;
  }

  submit(value) {
    console.log(value.value);
  }
}

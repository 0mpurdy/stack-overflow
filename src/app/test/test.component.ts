import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { TestServiceService } from '../feature-module/test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'app';

  parentValue: string;
  overWrite = false;

  constructor(
    testServiceService: TestServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    console.log(testServiceService.getProperty());
    this.parentValue = 'initial Value';
  }

  changeParentValue() {
    this.parentValue = 'another value';
    this.router.navigateByUrl('/param;somethingelse');
  }

}

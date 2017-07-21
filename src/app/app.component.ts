import { Component } from '@angular/core';

import { TestServiceService } from './feature-module/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(testServiceService: TestServiceService) {
    console.log(testServiceService.getProperty());
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class TestServiceService {

  constructor() { }

  getProperty() {
    return 'This is your test property!';
  }

}

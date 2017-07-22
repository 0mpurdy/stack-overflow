import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPVQComponent } from './fp-pvq.component';

describe('FpPVQComponent', () => {
  let component: FpPVQComponent;
  let fixture: ComponentFixture<FpPVQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpPVQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpPVQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

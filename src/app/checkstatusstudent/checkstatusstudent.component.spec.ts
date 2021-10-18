import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckstatusstudentComponent } from './checkstatusstudent.component';

describe('CheckstatusstudentComponent', () => {
  let component: CheckstatusstudentComponent;
  let fixture: ComponentFixture<CheckstatusstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckstatusstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckstatusstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

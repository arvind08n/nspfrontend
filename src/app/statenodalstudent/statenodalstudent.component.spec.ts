import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenodalstudentComponent } from './statenodalstudent.component';

describe('StatenodalstudentComponent', () => {
  let component: StatenodalstudentComponent;
  let fixture: ComponentFixture<StatenodalstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatenodalstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenodalstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

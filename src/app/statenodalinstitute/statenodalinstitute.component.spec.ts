import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenodalinstituteComponent } from './statenodalinstitute.component';

describe('StatenodalinstituteComponent', () => {
  let component: StatenodalinstituteComponent;
  let fixture: ComponentFixture<StatenodalinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatenodalinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenodalinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

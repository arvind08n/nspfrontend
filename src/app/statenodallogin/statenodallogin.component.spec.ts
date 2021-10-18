import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenodalloginComponent } from './statenodallogin.component';

describe('StatenodalloginComponent', () => {
  let component: StatenodalloginComponent;
  let fixture: ComponentFixture<StatenodalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatenodalloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenodalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

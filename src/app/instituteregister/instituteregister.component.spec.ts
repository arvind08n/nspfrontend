import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteregisterComponent } from './instituteregister.component';

describe('InstituteregisterComponent', () => {
  let component: InstituteregisterComponent;
  let fixture: ComponentFixture<InstituteregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

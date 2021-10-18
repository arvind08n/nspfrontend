import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrystudentComponent } from './ministrystudent.component';

describe('MinistrystudentComponent', () => {
  let component: MinistrystudentComponent;
  let fixture: ComponentFixture<MinistrystudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrystudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrystudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

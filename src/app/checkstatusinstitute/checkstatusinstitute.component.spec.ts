import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckstatusinstituteComponent } from './checkstatusinstitute.component';

describe('CheckstatusinstituteComponent', () => {
  let component: CheckstatusinstituteComponent;
  let fixture: ComponentFixture<CheckstatusinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckstatusinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckstatusinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

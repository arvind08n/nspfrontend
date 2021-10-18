import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyscholarshipComponent } from './applyscholarship.component';

describe('ApplyscholarshipComponent', () => {
  let component: ApplyscholarshipComponent;
  let fixture: ComponentFixture<ApplyscholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyscholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyscholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

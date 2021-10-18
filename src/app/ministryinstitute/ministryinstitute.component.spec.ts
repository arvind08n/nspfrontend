import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryinstituteComponent } from './ministryinstitute.component';

describe('MinistryinstituteComponent', () => {
  let component: MinistryinstituteComponent;
  let fixture: ComponentFixture<MinistryinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

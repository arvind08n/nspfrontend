import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterloginComponent } from './ministerlogin.component';

describe('MinisterloginComponent', () => {
  let component: MinisterloginComponent;
  let fixture: ComponentFixture<MinisterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

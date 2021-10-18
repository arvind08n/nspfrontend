import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenodalhomeComponent } from './statenodalhome.component';

describe('StatenodalhomeComponent', () => {
  let component: StatenodalhomeComponent;
  let fixture: ComponentFixture<StatenodalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatenodalhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenodalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

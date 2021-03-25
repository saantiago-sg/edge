import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeartComponent } from './nav-heart.component';

describe('NavHeartComponent', () => {
  let component: NavHeartComponent;
  let fixture: ComponentFixture<NavHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

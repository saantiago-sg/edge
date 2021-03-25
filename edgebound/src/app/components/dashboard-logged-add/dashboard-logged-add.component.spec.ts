import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoggedAddComponent } from './dashboard-logged-add.component';

describe('DashboardLoggedAddComponent', () => {
  let component: DashboardLoggedAddComponent;
  let fixture: ComponentFixture<DashboardLoggedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLoggedAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoggedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

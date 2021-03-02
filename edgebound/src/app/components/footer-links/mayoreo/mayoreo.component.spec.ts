import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoreoComponent } from './mayoreo.component';

describe('MayoreoComponent', () => {
  let component: MayoreoComponent;
  let fixture: ComponentFixture<MayoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayoreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

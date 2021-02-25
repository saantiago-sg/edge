import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementosYOtrosComponent } from './complementos-y-otros.component';

describe('ComplementosYOtrosComponent', () => {
  let component: ComplementosYOtrosComponent;
  let fixture: ComponentFixture<ComplementosYOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplementosYOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementosYOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesivoComponent } from './adhesivo.component';

describe('AdhesivoComponent', () => {
  let component: AdhesivoComponent;
  let fixture: ComponentFixture<AdhesivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhesivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

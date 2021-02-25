import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosParaCocinaComponent } from './accesorios-para-cocina.component';

describe('AccesoriosParaCocinaComponent', () => {
  let component: AccesoriosParaCocinaComponent;
  let fixture: ComponentFixture<AccesoriosParaCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriosParaCocinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosParaCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

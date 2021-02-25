import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosParaBanoComponent } from './accesorios-para-bano.component';

describe('AccesoriosParaBanoComponent', () => {
  let component: AccesoriosParaBanoComponent;
  let fixture: ComponentFixture<AccesoriosParaBanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriosParaBanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosParaBanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

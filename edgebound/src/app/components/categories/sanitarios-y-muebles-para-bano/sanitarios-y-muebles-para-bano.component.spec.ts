import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitariosYMueblesParaBanoComponent } from './sanitarios-y-muebles-para-bano.component';

describe('SanitariosYMueblesParaBanoComponent', () => {
  let component: SanitariosYMueblesParaBanoComponent;
  let fixture: ComponentFixture<SanitariosYMueblesParaBanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitariosYMueblesParaBanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitariosYMueblesParaBanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

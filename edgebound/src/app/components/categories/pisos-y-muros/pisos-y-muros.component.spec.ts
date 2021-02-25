import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosYMurosComponent } from './pisos-y-muros.component';

describe('PisosYMurosComponent', () => {
  let component: PisosYMurosComponent;
  let fixture: ComponentFixture<PisosYMurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisosYMurosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosYMurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

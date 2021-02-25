import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalentadoresYTinacosComponent } from './calentadores-y-tinacos.component';

describe('CalentadoresYTinacosComponent', () => {
  let component: CalentadoresYTinacosComponent;
  let fixture: ComponentFixture<CalentadoresYTinacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalentadoresYTinacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalentadoresYTinacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

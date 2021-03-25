import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistAddedComponent } from './wishlist-added.component';

describe('WishlistAddedComponent', () => {
  let component: WishlistAddedComponent;
  let fixture: ComponentFixture<WishlistAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftMealsComponent } from './gift-meals.component';

describe('GiftMealsComponent', () => {
  let component: GiftMealsComponent;
  let fixture: ComponentFixture<GiftMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

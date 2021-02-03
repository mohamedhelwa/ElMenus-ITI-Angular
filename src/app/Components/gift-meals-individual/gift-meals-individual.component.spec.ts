import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftMealsIndividualComponent } from './gift-meals-individual.component';

describe('GiftMealsIndividualComponent', () => {
  let component: GiftMealsIndividualComponent;
  let fixture: ComponentFixture<GiftMealsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftMealsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftMealsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

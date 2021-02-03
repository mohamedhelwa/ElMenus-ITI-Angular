import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantReviewsComponent } from './resturant-reviews.component';

describe('ResturantReviewsComponent', () => {
  let component: ResturantReviewsComponent;
  let fixture: ComponentFixture<ResturantReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

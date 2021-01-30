import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRestaurantDashboardComponent } from './details-restaurant-dashboard.component';

describe('DetailsRestaurantDashboardComponent', () => {
  let component: DetailsRestaurantDashboardComponent;
  let fixture: ComponentFixture<DetailsRestaurantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRestaurantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantDashboardComponent } from './add-restaurant-dashboard.component';

describe('AddRestaurantDashboardComponent', () => {
  let component: AddRestaurantDashboardComponent;
  let fixture: ComponentFixture<AddRestaurantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRestaurantsDashboardComponent } from './show-restaurants-dashboard.component';

describe('ShowRestaurantsDashboardComponent', () => {
  let component: ShowRestaurantsDashboardComponent;
  let fixture: ComponentFixture<ShowRestaurantsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRestaurantsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRestaurantsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

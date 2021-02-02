import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFeaturesOrderOnlineComponent } from './delivery-features-order-online.component';

describe('DeliveryFeaturesOrderOnlineComponent', () => {
  let component: DeliveryFeaturesOrderOnlineComponent;
  let fixture: ComponentFixture<DeliveryFeaturesOrderOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFeaturesOrderOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFeaturesOrderOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

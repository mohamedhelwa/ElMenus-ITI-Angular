import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrderListComponent } from './dashboard-order-list.component';

describe('DashboardOrderListComponent', () => {
  let component: DashboardOrderListComponent;
  let fixture: ComponentFixture<DashboardOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

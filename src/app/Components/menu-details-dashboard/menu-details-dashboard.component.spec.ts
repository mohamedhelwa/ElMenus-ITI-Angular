import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsDashboardComponent } from './menu-details-dashboard.component';

describe('MenuDetailsDashboardComponent', () => {
  let component: MenuDetailsDashboardComponent;
  let fixture: ComponentFixture<MenuDetailsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

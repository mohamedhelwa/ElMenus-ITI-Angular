import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistDashboardComponent } from './menulist-dashboard.component';

describe('MenulistDashboardComponent', () => {
  let component: MenulistDashboardComponent;
  let fixture: ComponentFixture<MenulistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulistDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

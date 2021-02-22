import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuDashboardComponent } from './add-menu-dashboard.component';

describe('AddMenuDashboardComponent', () => {
  let component: AddMenuDashboardComponent;
  let fixture: ComponentFixture<AddMenuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

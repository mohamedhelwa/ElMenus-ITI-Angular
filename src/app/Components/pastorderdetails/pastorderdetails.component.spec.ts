import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderdetailsComponent } from './pastorderdetails.component';

describe('PastorderdetailsComponent', () => {
  let component: PastorderdetailsComponent;
  let fixture: ComponentFixture<PastorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastorderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

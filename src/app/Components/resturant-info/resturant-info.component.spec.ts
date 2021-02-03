import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantInfoComponent } from './resturant-info.component';

describe('ResturantInfoComponent', () => {
  let component: ResturantInfoComponent;
  let fixture: ComponentFixture<ResturantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

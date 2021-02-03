import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantListComponent } from './resturant-list.component';

describe('ResturantListComponent', () => {
  let component: ResturantListComponent;
  let fixture: ComponentFixture<ResturantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

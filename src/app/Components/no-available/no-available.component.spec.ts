import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAvailableComponent } from './no-available.component';

describe('NoAvailableComponent', () => {
  let component: NoAvailableComponent;
  let fixture: ComponentFixture<NoAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

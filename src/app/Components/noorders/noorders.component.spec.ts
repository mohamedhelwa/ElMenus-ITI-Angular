import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoordersComponent } from './noorders.component';

describe('NoordersComponent', () => {
  let component: NoordersComponent;
  let fixture: ComponentFixture<NoordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

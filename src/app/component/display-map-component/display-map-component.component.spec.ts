import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMapComponentComponent } from './display-map-component.component';

describe('DisplayMapComponentComponent', () => {
  let component: DisplayMapComponentComponent;
  let fixture: ComponentFixture<DisplayMapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

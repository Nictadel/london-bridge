import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistentryComponent } from './newslistentry.component';

describe('NewslistentryComponent', () => {
  let component: NewslistentryComponent;
  let fixture: ComponentFixture<NewslistentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslistentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

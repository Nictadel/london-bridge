import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArticleMobileComponent } from './header-article-mobile.component';

describe('HeaderArticleMobileComponent', () => {
  let component: HeaderArticleMobileComponent;
  let fixture: ComponentFixture<HeaderArticleMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderArticleMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderArticleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStarsRatingComponent } from './app-stars-rating.component';

describe('AppStarsRatingComponent', () => {
  let component: AppStarsRatingComponent;
  let fixture: ComponentFixture<AppStarsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppStarsRatingComponent]
    });
    fixture = TestBed.createComponent(AppStarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

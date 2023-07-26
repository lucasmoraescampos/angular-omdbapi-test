import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTitleComponent } from './movies-title.component';

describe('MoviesTitleComponent', () => {
  let component: MoviesTitleComponent;
  let fixture: ComponentFixture<MoviesTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesTitleComponent]
    });
    fixture = TestBed.createComponent(MoviesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

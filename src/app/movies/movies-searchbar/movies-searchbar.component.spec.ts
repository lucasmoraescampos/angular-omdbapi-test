import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchbarComponent } from './movies-searchbar.component';

describe('MoviesSearchbarComponent', () => {
  let component: MoviesSearchbarComponent;
  let fixture: ComponentFixture<MoviesSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSearchbarComponent]
    });
    fixture = TestBed.createComponent(MoviesSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

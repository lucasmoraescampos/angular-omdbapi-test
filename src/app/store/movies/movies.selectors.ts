import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.reducer';

export const selectMoviesState = createFeatureSelector<MoviesState>('movies');

export const movieListSelector = createSelector(
  selectMoviesState,
  (state: MoviesState) => ({ searched: state.searched, list: state.list })
);

export const selectedMovieSelector = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.selected
);

export const favoritesSelector = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.favorites
);
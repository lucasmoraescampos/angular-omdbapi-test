import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/domain/movie';

export const setMoviesList = createAction(
  '[Movies] Set MoviesList',
  props<{ searched: string, list: Movie[] }>()
);

export const setSelectedMovie = createAction(
  '[Movies] Set SelectedMovie',
  props<{ selected?: Movie }>()
);

export const setFavorites = createAction(
  '[Movies] Set Favorites',
  props<{ favorites: Movie[] }>()
);
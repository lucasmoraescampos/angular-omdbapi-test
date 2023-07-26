import { createReducer, on } from '@ngrx/store';
import { setFavorites, setMoviesList, setSelectedMovie } from './movies.actions';
import { Movie } from 'src/app/domain/movie';

export interface MoviesState {
  searched: string;
  list: Movie[];
  favorites: Movie[];
  selected?: Movie;
}

export const initialState: MoviesState = {
  searched: '',
  list: [],
  favorites: [],
};

export const moviesReducer = createReducer(
  initialState,
  on(setMoviesList, (state, { searched, list }) => ({ ...state, searched, list })),
  on(setSelectedMovie, (state, { selected }) => ({ ...state, selected })),
  on(setFavorites, (state, { favorites }) => ({ ...state, favorites })),
);

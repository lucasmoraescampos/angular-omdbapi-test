import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../domain/movie';
import { Store, select } from '@ngrx/store';
import { setFavorites, setMoviesList, setSelectedMovie } from '../store/movies/movies.actions';
import { favoritesSelector, movieListSelector, selectedMovieSelector } from '../store/movies/movies.selectors';
import { MoviesState } from '../store/movies/movies.reducer';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favoritesKey: string = 'movies__favorites';
  private apiKey: string = environment.OMDB_API_KEY;
  private apiUrl: string = environment.OMDB_API_URL;

  constructor(
    private http: HttpClient,
    private store: Store<{ movies: MoviesState }>
  ) {
    const favorites = this.getStorageFavorites();
    this.store.dispatch(setFavorites({ favorites }));
  }

  public find(searched: string): Promise<Movie[]> {
    searched = searched.trim();
    return new Promise((resolve, reject) => {
      const params = {
        apikey: this.apiKey,
        s: searched
      };
      this.http.get<{ Response: string, Search: any[] }>(this.apiUrl, { params })
        .pipe(
          first(),
          map((response) => {
            if (response.Response == 'True') {
              return response.Search.map((movie) => {
                return {
                  id: movie.imdbID,
                  title: movie.Title,
                  poster: movie.Poster,
                  year: movie.Year,
                  type: movie.Type
                }
              })
            } else {
              return [];
            }
          })
        )
        .subscribe({
          next: (list: Movie[]) => {
            this.store.dispatch(setMoviesList({ searched, list }));
            resolve(list);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  public findById(id: string): Promise<Movie | null> {
    return new Promise((resolve, reject) => {
      const params = {
        apikey: this.apiKey,
        i: id
      };
      return this.http.get<any>(this.apiUrl, { params })
        .pipe(
          first(),
          map((response) => {
            if (response.Response == 'false') {
              return null;
            } else {
              return {
                id: response.imdbID,
                title: response.Title,
                poster: response.Poster,
                year: response.Year,
                type: response.Type,
                plot: response.Plot,
                actors: response.Actors,
                rating: Number(response.imdbRating) / 2
              };
            }
          })
        )
        .subscribe({
          next: (selected) => {
            if (selected) {
              this.store.dispatch(setSelectedMovie({ selected }));
            }
            resolve(selected);
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  public getMoviesList(): Observable<{ searched: string, list: Movie[] }> {
    return this.store.pipe(select(movieListSelector));
  }

  public getSelectedMovie(): Observable<Movie | undefined> {
    return this.store.pipe(select(selectedMovieSelector));
  }

  public resetSelectedMovie(): void {
    this.store.dispatch(setSelectedMovie({ selected: undefined }));
  }

  public getFavorites(): Observable<Movie[]> {
    return this.store.pipe(select(favoritesSelector));
  }

  public isFavorite(id: string): boolean {
    const favorites = this.getStorageFavorites();
    return !!favorites.find(f => f.id == id);
  }

  public addFavorite(movie: Movie): void {
    const favorites = this.getStorageFavorites();
    favorites.push(movie);
    this.setStorageFavorites(favorites);
    this.store.dispatch(setFavorites({ favorites }));
  }

  public removeFavorite(id: string): void {
    let favorites = this.getStorageFavorites();
    favorites = favorites.filter(f => f.id != id);
    this.setStorageFavorites(favorites);
    this.store.dispatch(setFavorites({ favorites }));
  }

  private getStorageFavorites(): Movie[] {
    return JSON.parse(localStorage.getItem(this.favoritesKey) ?? '[]');
  }

  private setStorageFavorites(favorites: Movie[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }
}
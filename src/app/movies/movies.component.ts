import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../use-cases/movie.service';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from '../domain/movie';
import { AppModalService } from '../shared/components/app-modal/app-modal.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public searched: string = '';
  public moviesList: Movie[] = [];
  public selectedMovie?: Movie;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private movieService: MovieService,
    private modalService: AppModalService
  ) {}

  public ngOnInit(): void {
    this.listenSelectedMovie();
    this.listenMoviesList();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public openFavorites(): void {
    this.modalService.show();
  }

  private listenSelectedMovie(): void {
    this.movieService.getSelectedMovie()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (selected) => {
          this.selectedMovie = selected;
        }
      });
  }

  private listenMoviesList(): void {
    this.movieService.getMoviesList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: ({ searched, list }) => {
          this.searched = searched;
          this.moviesList = list;
        }
      });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/domain/movie';
import { AppModalService } from 'src/app/shared/components/app-modal/app-modal.service';
import { MovieService } from 'src/app/use-cases/movie.service';

@Component({
  selector: 'favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit, OnDestroy {
  public loading: boolean[] = [];
  public favorites: Movie[] = [];
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private movieService: MovieService,
    private modalService: AppModalService
  ) {}

  public ngOnInit(): void {
    this.listenFavorites();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public openMovie(index: number): void {
    this.loading[index] = true;
    this.movieService.findById(this.favorites[index].id)
      .then(() => {
        this.modalService.hide();
        this.loading[index] = false;
      })
      .catch(() => {
        this.loading[index] = false;
      });
  }

  public remove(id: string): void {
    this.movieService.removeFavorite(id);
  }

  private listenFavorites(): void {
    this.movieService.getFavorites()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (favorites) => {
          this.favorites = favorites;
          this.loading = this.favorites.map(() => false);
        }
      });
  }
}

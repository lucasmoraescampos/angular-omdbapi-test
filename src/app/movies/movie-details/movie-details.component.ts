import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/use-cases/movie.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnChanges {
  public isFavorite: boolean = false;

  @Input() public movie?: Movie;

  constructor(
    private movieService: MovieService
  ) {}

  public ngOnChanges(): void {
    if (this.movie) {
      this.isFavorite = this.movieService.isFavorite(this.movie.id);
    }
  }

  public favorite(): void {
    if (this.movie) {
      this.movieService.addFavorite(this.movie);
      this.isFavorite = true;
    }
  }

  public removeFavorite(): void {
    if (this.movie) {
      this.movieService.removeFavorite(this.movie.id);
      this.isFavorite = false;
    }
  }
}

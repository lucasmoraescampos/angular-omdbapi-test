import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/domain/movie';
import { AppOffcanvasService } from 'src/app/shared/components/app-offcanvas/app-offcanvas.service';
import { MovieService } from 'src/app/use-cases/movie.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  public loading: boolean[] = [];

  @Input() public list: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private offcanvasService: AppOffcanvasService
  ) {
    this.loading = this.list.map(() => false);
  }

  public selectMovie(index: number): void {
    this.loading[index] = true;
    this.movieService.findById(this.list[index].id)
      .then(() => {
        this.loading[index] = false;
        this.offcanvasService.hide();
      });
  }
}

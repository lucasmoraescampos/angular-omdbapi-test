import { Component } from '@angular/core';
import { AppOffcanvasService } from 'src/app/shared/components/app-offcanvas/app-offcanvas.service';
import { toast } from 'src/app/shared/helpers/swal.helper';
import { MovieService } from 'src/app/use-cases/movie.service';

@Component({
  selector: 'movies-searchbar',
  templateUrl: './movies-searchbar.component.html',
  styleUrls: ['./movies-searchbar.component.scss']
})
export class MoviesSearchbarComponent {
  public loading: boolean = false;
  public value: string = '';

  constructor(
    private movieService: MovieService,
    private offcanvasService: AppOffcanvasService
  ) {}

  public search(): void {
    if (this.value.length > 0) {
      this.loading = true;
      this.movieService.find(this.value)
        .then(movies => {
          this.loading = false;
          if (movies.length > 0) {
            this.offcanvasService.show();
          } else {
            toast('error', 'No movies found');
          }
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }

  public reset(): void {
    this.value = '';
    this.movieService.resetSelectedMovie();
  }
}

import { Component } from '@angular/core';
import { DataMovie } from '../../models/dataMovie';
import { NetflixService } from '../../services/netflix.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: DataMovie[] = [];
  page: number = 1;
  max_page: number = 0;
  constructor(private netflixService: NetflixService) {
    this.getMoreMovies();
  }

  getMoreMovies() {
    if (this.page === this.max_page) return;

    this.netflixService.getMovies(this.page).subscribe((res) => {
      this.movies = [...this.movies, ...res.movies];
      this.page = res.page;
      this.max_page = res.total_pages;
      this.page++;
    });
  }

  onScroll() {
    this.getMoreMovies();
  }
}

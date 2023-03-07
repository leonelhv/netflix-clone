import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataMovie } from '../../models/dataMovie';
import { NetflixService } from '../../services/netflix.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query!: string;
  movies: DataMovie[] = [];
  page: number = 1;
  max_page: number = 0;

  constructor(
    private route: ActivatedRoute,
    private netflixService: NetflixService
  ) {
    this.route.params.subscribe((params) => {
      const newQuery = params['query'];
      if (newQuery !== this.query) {
        this.page = 1;
        this.movies = [];
      }
      this.query = newQuery;
      this.getMoreMovies();
    });
  }

  getMoreMovies() {
    const params = {
      query: this.query,
      page: this.page,
    };
    this.netflixService.getMoviesSearch(params).subscribe((res) => {
      this.movies = [...this.movies, ...res.movies];
      this.page++;
    });
  }

  onScroll() {
    this.getMoreMovies();
  }
}

import { Component } from '@angular/core';
import { DataMovie } from '../../models/dataMovie';
import { NetflixService } from '../../services/netflix.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  series: DataMovie[] = [];
  page: number = 1;
  max_page: number = 0;
  selector: string = '.main-panel';
  constructor(private netflixService: NetflixService) {
    this.getMoreMovies();
  }

  getMoreMovies() {
    if (this.page === this.max_page) return;

    this.netflixService.getSeries(this.page).subscribe((res) => {
      this.series = [...this.series, ...res.series];
      this.page = res.page;
      this.max_page = res.total_pages;
      this.page++;
    });
  }

  onScroll() {
    this.getMoreMovies();
  }
}

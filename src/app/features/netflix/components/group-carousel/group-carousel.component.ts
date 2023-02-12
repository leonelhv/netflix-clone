import { Component } from '@angular/core';
import { NetflixService } from '../../services/netflix.service';
import { forkJoin } from 'rxjs';
import { ItemResultOriginalNetflix } from '../../interfaces/netflixOriginal.interface';
import { DataMovie } from '../../models/dataMovie';
@Component({
  selector: 'app-group-carousel',
  templateUrl: './group-carousel.component.html',
  styleUrls: ['./group-carousel.component.css'],
})
export class GroupCarouselComponent {
  netflixOriginals: DataMovie[] = [];
  trendingMovies: DataMovie[] = [];
  topRatedMovies: DataMovie[] = [];
  actionMovies: DataMovie[] = [];
  constructor(private netflixService: NetflixService) {
    forkJoin([
      this.netflixService.getNetflixOriginals(),
      this.netflixService.getTrendingMovies(),
      this.netflixService.getTopRatedMovies(),
      this.netflixService.getActionMovies(),
    ]).subscribe(
      ([
        netflixOriginalsResult,
        trendingMoviesResult,
        topRatedMoviesResult,
        actionMoviesResult,
      ]) => {
        this.netflixOriginals = netflixOriginalsResult;
        this.trendingMovies = trendingMoviesResult;
        this.topRatedMovies = topRatedMoviesResult;
        this.actionMovies = actionMoviesResult;
        this.netflixService.idsNetflixOriginals.next(netflixOriginalsResult);
      }
    );
  }
}

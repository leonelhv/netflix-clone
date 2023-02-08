import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IOriginalNetflix,
  ItemResultOriginalNetflix,
} from '../interfaces/netflixOriginal.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NetflixModule } from '../netflix.module';
@Injectable()
export class NetflixService {
  private readonly BASE_URL = environment.API_MOVIEDB.BASE_URL;

  constructor(private http: HttpClient) {}

  getNetflixOriginals(): Observable<ItemResultOriginalNetflix[]> {
    const params = new HttpParams().set('with_networks', 213);

    return this.http
      .get<IOriginalNetflix>(`${this.BASE_URL}/discover/tv`, {
        params,
      })
      .pipe(map((result) => result.results));
  }

  getTrendingMovies() {
    return this.http
      .get(`${this.BASE_URL}/trending/movie/week`)
      .pipe(map((result: any) => result.results));
  }

  getTopRatedMovies() {
    const params = new HttpParams().set('language', 'en-US').set('page', 1);
    return this.http
      .get(`${this.BASE_URL}/movie/top_rated`, { params })
      .pipe(map((result: any) => result.results));
  }
  getActionMovies() {
    const params = new HttpParams().set('with_genres', 28);
    return this.http
      .get(`${this.BASE_URL}/movie/top_rated`, { params })
      .pipe(map((result: any) => result.results));
  }
}

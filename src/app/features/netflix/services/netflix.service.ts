import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOriginalNetflix } from '../interfaces/netflixOriginal.interface';
import { map, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { DataMovie } from '../models/dataMovie';
@Injectable()
export class NetflixService {
  private readonly BASE_URL = environment.API_MOVIEDB.BASE_URL;

  idsNetflixOriginals: Subject<DataMovie[]> = new Subject<DataMovie[]>();

  constructor(private http: HttpClient) {}

  getNetflixOriginals(): Observable<DataMovie[]> {
    const params = new HttpParams().set('with_networks', 213);

    return this.http
      .get<IOriginalNetflix>(`${this.BASE_URL}/discover/tv`, {
        params,
      })
      .pipe(
        map((res: IOriginalNetflix) => {
          return res.results.map((item) => {
            return new DataMovie(item);
          });
        })
      );
  }

  getTrendingMovies() {
    return this.http.get(`${this.BASE_URL}/trending/movie/week`).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie(item);
        });
      })
    );
  }

  getTopRatedMovies() {
    const params = new HttpParams().set('language', 'en-US').set('page', 1);
    return this.http.get(`${this.BASE_URL}/movie/top_rated`, { params }).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie(item);
        });
      })
    );
  }
  getActionMovies() {
    const params = new HttpParams().set('with_genres', 28);
    return this.http.get(`${this.BASE_URL}/movie/top_rated`, { params }).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie(item);
        });
      })
    );
  }

  getRandomMovieNetflixOriginal(): Observable<any> {
    return this.idsNetflixOriginals.pipe(
      map((movies) => {
        const cantMovies = movies.length;
        const numRandom = Math.floor(Math.random() * cantMovies);
        return movies[numRandom];
      }),
      switchMap((movie) => {
        const { id } = movie;
        return this.getKeyYT(id).pipe(
          map((keyYT) => {
            return { ...movie, keyYT };
          })
        );
      })
    );
  }

  getKeyYT(id: number) {
    return this.http.get<any>(`${this.BASE_URL}/tv/${id}/videos`).pipe(
      map((data) => {
        return data?.results[0]?.key;
      })
    );
  }
}

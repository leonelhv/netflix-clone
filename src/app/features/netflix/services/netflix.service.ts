import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOriginalNetflix } from '../interfaces/netflixOriginal.interface';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { DataMovie } from '../models/dataMovie';
import { Cast, Details } from '../interfaces/detailsmedia';
import { DetailsMediaModel } from '../models/detailsMovie';
import { VideoInfo, VideoMediaResults } from '../interfaces/videoMedia';
import { Movies, MoviesInfo } from '../interfaces/movie';
import { Series, SeriesInfo } from '../interfaces/series';
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
            return new DataMovie({ ...item, type: 'tv ' });
          });
        })
      );
  }

  getTrendingMovies() {
    return this.http.get(`${this.BASE_URL}/trending/movie/week`).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie({ ...item, type: 'movie' });
        });
      })
    );
  }

  getTopRatedMovies() {
    const params = new HttpParams().set('page', 1);
    return this.http.get(`${this.BASE_URL}/movie/top_rated`, { params }).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie({ ...item, type: 'movie' });
        });
      })
    );
  }
  getActionMovies() {
    const params = new HttpParams().set('with_genres', 28);
    return this.http.get(`${this.BASE_URL}/movie/top_rated`, { params }).pipe(
      map((res: any) => {
        return res.results.map((item: any) => {
          return new DataMovie({ ...item, type: 'movie' });
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

  getDetailsFromIDandType(
    id: number,
    type: string
  ): Observable<DetailsMediaModel> {
    const details$ = this.http.get<Details>(`${this.BASE_URL}/${type}/${id}`);
    const cast$ = this.getCastFromMedia(id, type);
    const videos$ = this.getVideosFromMedia(id, type);
    const mediaSimilar$ = this.getSimilarFromMedia(id, type);

    return combineLatest([details$, cast$, videos$, mediaSimilar$]).pipe(
      map(([details, cast, videos, mediaSimilar]) => {
        const data = {
          ...details,
          casts: cast.slice(0, 5),
          videos: videos,
          mediaSimilar: mediaSimilar,
        };
        return new DetailsMediaModel(data);
      })
    );
  }

  private getCastFromMedia(id: number, type: string): Observable<Cast[]> {
    return this.http
      .get<{ cast: Cast[] }>(`${this.BASE_URL}/${type}/${id}/credits`)
      .pipe(
        map((response) => {
          return response.cast.slice(0, 5);
        })
      );
  }

  private getVideosFromMedia(
    id: number,
    type: string
  ): Observable<VideoInfo[]> {
    const params = new HttpParams().set('language', 'en-US');
    return this.http
      .get<VideoMediaResults>(`${this.BASE_URL}/${type}/${id}/videos`, {
        params,
      })
      .pipe(
        map(({ results }) => {
          return results;
        })
      );
  }

  getSimilarFromMedia(id: number, type: string) {
    return this.http
      .get<VideoMediaResults>(`${this.BASE_URL}/${type}/${id}/similar`)
      .pipe(
        map(({ results }) => {
          return results
            .filter((item: any) => item.backdrop_path)
            .map((res) => {
              return new DataMovie({ ...res, type });
            });
        })
      );
  }

  getMovies(page: number): Observable<MoviesInfo> {
    const params = new HttpParams().set('page', page);
    return this.http
      .get<Movies>(`${this.BASE_URL}/movie/popular`, { params })
      .pipe(
        map((res) => {
          const movies = res.results.map((item) => {
            if(item.poster_path){}
              return new DataMovie({ ...item, type: 'movie' });
          });
          
          const result = {
            page: res.page,
            movies,
            total_pages: res.total_pages,
          };
          return result;
        })
      );
  }

  getSeries(page:number):Observable<SeriesInfo>{
    const params = new HttpParams().set('page', page);
    return this.http
      .get<Series>(`${this.BASE_URL}/tv/popular`, { params })
      .pipe(
        map((res) => {
          const series = res.results.map((item: any) => {
            return new DataMovie({ ...item, type: 'tv' });
          });
          const result = {
            page: res.page,
            series,
            total_pages: res.total_pages,
          };
          return result;
        })
      );
  }

  getMoviesSearch({ query, page }: { query: string, page: number }): Observable<MoviesInfo>{
    const params = new HttpParams().set('page', page).set('query',query);
    return this.http.get<Movies>(`${this.BASE_URL}/search/movie`,{params}).pipe(
      map((res) => {
        const movies = res.results.map((item) => {
          return new DataMovie({ ...item, type: 'movie' });
        });
        const filterMovies=movies.filter(mov=>mov.backdrop_path!==null)
        const result = {
          page: res.page,
          movies:filterMovies,
          total_pages: res.total_pages,
        };
        return result;
      })
    );
  }
}

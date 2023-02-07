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
}

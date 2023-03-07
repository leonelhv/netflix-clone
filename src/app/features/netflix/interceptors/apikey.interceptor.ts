import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const api_key = environment.API_MOVIEDB.api_key;
    let paramsObj: any = {};

    for (const key of request.params.keys()) {
      paramsObj[key] = request.params.get(key);
    }

    if (!paramsObj.hasOwnProperty('language')) {
      paramsObj = { ...paramsObj, language: 'es-PE' };
    }

    const newRequest = request.clone({
      setParams: { ...paramsObj, api_key },
    });

    return next.handle(newRequest);
  }
}

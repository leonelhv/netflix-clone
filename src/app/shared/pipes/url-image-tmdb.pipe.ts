import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImgTMDB',
})
export class UrlImageTMDBPipe implements PipeTransform {
  transform(value: unknown, query?: string): unknown {
    if (query === 'sm') {
      return `https://image.tmdb.org/t/p/w300` + value;
    }
    return `https://image.tmdb.org/t/p/w1280` + value;
  }
}

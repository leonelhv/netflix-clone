export class DataMovie {
  backdrop_path!: string;
  first_air_date!: Date;
  genre_ids!: number[];
  id!: number;
  title!: string;
  origin_country!: string[];
  original_language!: string;
  original_name!: string;
  overview!: string;
  popularity!: number;
  poster_path!: string;
  vote_average!: number;
  vote_count!: number;

  constructor(data: any) {
    this.backdrop_path = data.backdrop_path;
    this.first_air_date = data.first_air_date;
    this.genre_ids = data.genre_ids;
    this.id = data.id;
    this.title = data.title || data.name;
    this.origin_country = data.origin_country;
    this.original_language = data.original_language;
    this.original_name = data.original_name;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.poster_path = data.poster_path;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }
}

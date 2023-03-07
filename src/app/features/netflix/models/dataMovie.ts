export class DataMovie {
  backdrop_path!: string;
  first_air_date!: string;
  id!: number;
  title: string;
  origin_country!: string[];
  original_language!: string;
  original_name!: string;
  overview!: string;
  popularity!: number;
  poster_path!: string;
  vote_average!: number;
  vote_count!: number;
  keyYT?: string;
  type: string;

  constructor(data: any) {
    this.backdrop_path = data.backdrop_path;
    this.first_air_date = data.first_air_date || data.release_date;
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
    this.keyYT = data.keyYT || undefined;
    this.type = data.type;
  }
}

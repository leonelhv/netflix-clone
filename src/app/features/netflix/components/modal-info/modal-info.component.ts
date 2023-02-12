import { Component, Input } from '@angular/core';
import { DataMovie } from '../../models/dataMovie';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent {
  /*  data: DataMovie = {
    backdrop_path: '/tl0mg7lOnS6tP8ngH0QwgMLQdpV.jpg',
    first_air_date: '2018-10-05',
    genre_ids: [80, 9648, 18],
    id: 76669,
    title: 'Elite',
    origin_country: ['ES'],
    original_language: 'es',
    original_name: 'Élite',
    overview:
      'When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.',
    popularity: 199.699,
    poster_path: '/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
    vote_average: 8.1,
    vote_count: 8645,
    keyYT: 'QNwhAdrdwp0',
  }; */
  @Input() dataOverlay!: DataMovie;
}

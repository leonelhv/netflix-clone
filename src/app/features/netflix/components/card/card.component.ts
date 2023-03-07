import { Component, Input } from '@angular/core';
import { DataMovie } from '../../models/dataMovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() movie!:DataMovie
}

import { Component, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { DataMovie } from '../../models/dataMovie';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent {
  @Input() dataOverlay!: DataMovie;
  image!: string;

  constructor(private router: Router, private overlayService: OverlayService) {}

  ngOnInit() {
    this.image = `https://image.tmdb.org/t/p/w780${this.dataOverlay.backdrop_path}`;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.overlayService.close();
      }
    });
  }
}

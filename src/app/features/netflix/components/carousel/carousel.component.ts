import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { DataMovie } from '../../models/dataMovie';
import { OverlayService } from '../../services/overlay.service';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() titleCarousel!: string;
  @Input() dataCarousel!: DataMovie[];
  isDragging = false;

  constructor(private overlayService: OverlayService) {}

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    lazyLoad: true,
    lazyLoadEager: 2,
    stagePadding: 20,
    margin: 10,
    center: false,
    autoWidth: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  showModal(item: DataMovie) {
    if (!this.isDragging) {
      this.overlayService.open(ModalInfoComponent, { ...item });
    }
  }
  disableModal() {
    this.isDragging = true;
  }
  enableModal() {
    this.isDragging = false;
  }
}

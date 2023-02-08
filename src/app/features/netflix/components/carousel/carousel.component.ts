import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() titleCarousel!: string;
  @Input() dataCarousel!: any[];

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

    responsive: {
      0: {
        items: 1,
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
}

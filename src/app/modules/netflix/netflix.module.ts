import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { BrowseComponent } from './pages/browse/browse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NetflixComponent } from './netflix.component';
@NgModule({
  declarations: [BrowseComponent, CarouselComponent, NetflixComponent],
  imports: [CommonModule, CarouselModule, NetflixRoutingModule, SharedModule],
  exports: [NetflixComponent],
})
export class NetflixModule {}

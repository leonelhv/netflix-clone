import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { BrowseComponent } from './pages/browse/browse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NetflixComponent } from './netflix.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NetflixService } from './services/netflix.service';
import { ApikeyInterceptor } from './interceptors/apikey.interceptor';
import { VideoHeroComponent } from './components/video-hero/video-hero.component';
import { GroupCarouselComponent } from './components/group-carousel/group-carousel.component';
@NgModule({
  declarations: [BrowseComponent, CarouselComponent, NetflixComponent, VideoHeroComponent, GroupCarouselComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    CarouselModule,
    NetflixRoutingModule,
    SharedModule,
  ],
  exports: [NetflixComponent],
  providers: [
    NetflixService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true,
    },
  ],
})
export class NetflixModule {}

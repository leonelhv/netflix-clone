import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { BrowseComponent } from './pages/browse/browse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NetflixComponent } from './netflix.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NetflixService } from './services/netflix.service';
import { ApikeyInterceptor } from './interceptors/apikey.interceptor';
import { VideoHeroComponent } from './components/video-hero/video-hero.component';
import { GroupCarouselComponent } from './components/group-carousel/group-carousel.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DetailsComponent } from './pages/details/details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './pages/search/search.component';
@NgModule({
  declarations: [
    BrowseComponent,
    CarouselComponent,
    NetflixComponent,
    VideoHeroComponent,
    GroupCarouselComponent,
    ModalInfoComponent,
    DetailsComponent,
    MoviesComponent,
    SeriesComponent,
    CardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    CarouselModule,
    NetflixRoutingModule,
    SharedModule,
    OverlayModule,
    PortalModule,
    RouterModule,
    InfiniteScrollModule,
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

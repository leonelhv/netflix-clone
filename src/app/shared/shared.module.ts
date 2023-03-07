import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNetflixComponent } from './components/svg/logo-netflix/logo-netflix.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UrlImageTMDBPipe } from './pipes/url-image-tmdb.pipe';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoNetflixComponent, NavbarComponent, UrlImageTMDBPipe],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [LogoNetflixComponent, NavbarComponent, UrlImageTMDBPipe],
})
export class SharedModule {}

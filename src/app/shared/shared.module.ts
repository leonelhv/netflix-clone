import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNetflixComponent } from './components/svg/logo-netflix/logo-netflix.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [LogoNetflixComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [LogoNetflixComponent, NavbarComponent],
})
export class SharedModule {}

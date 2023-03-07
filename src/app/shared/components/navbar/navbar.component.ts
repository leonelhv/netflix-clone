import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isScrolled = false;
  keyword: string = '';

  constructor(private router: Router) {}

  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset;
    this.isScrolled = scrollPosition > 15;
  }

  onSubmit() {
    this.router.navigate([`/search/${this.keyword}`]);
  }
}

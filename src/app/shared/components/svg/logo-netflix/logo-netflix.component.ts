import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-netflix',
  templateUrl: './logo-netflix.component.html',
  styleUrls: ['./logo-netflix.component.css'],
})
export class LogoNetflixComponent {
  @Input() width: string = 'w-44';
}

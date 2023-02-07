import { Component } from '@angular/core';
import { ItemResultOriginalNetflix } from '../../interfaces/netflixOriginal.interface';
import { NetflixService } from '../../services/netflix.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent {
  netflixOriginals: ItemResultOriginalNetflix[] = [];

  constructor(private netflixService: NetflixService) {
    this.netflixService.getNetflixOriginals().subscribe((result) => {
      this.netflixOriginals = result;
      console.log(result);
    });
  }
}

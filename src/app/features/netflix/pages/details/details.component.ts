import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DetailsMediaModel } from '../../models/detailsMovie';
import { NetflixService } from '../../services/netflix.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details!: DetailsMediaModel;

  constructor(
    private netflixService: NetflixService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const type = this.route.snapshot.queryParamMap.get('type')!.trim();

      this.netflixService
        .getDetailsFromIDandType(id, type)
        .subscribe((response) => {
          this.details = response;
        });
    });
  }

  existVideoTrailer() {
    return this.details.videos.some((video) => video.type == 'Trailer');
  }

  ngOnInit(): void {
    window.scrollTo(-100, -100);
  }
}

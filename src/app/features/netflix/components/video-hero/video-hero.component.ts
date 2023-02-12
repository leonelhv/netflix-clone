import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NetflixService } from '../../services/netflix.service';
declare var YT: any;
@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  styleUrls: ['./video-hero.component.css'],
})
export class VideoHeroComponent implements OnInit {
  @ViewChild('player', { static: false }) playerElement!: ElementRef;

  private player: any;
  private ytEvent: any;
  isMuted = false;
  endVideo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public movieNetflix: any;

  constructor(private netflixService: NetflixService) {
    this.netflixService.getRandomMovieNetflixOriginal().subscribe((res) => {
      console.log(res);
      this.movieNetflix = res;
    });
  }

  ngOnInit() {
    this.loadScript();
  }

  loadScript() {
    const doc = document;
    const playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);

    playerApiScript.onload = () => {
      setTimeout(() => {
        this.setupPlayer();
      }, 500);
    };
  }

  setupPlayer() {
    this.player = new YT.Player(this.playerElement.nativeElement, {
      videoId: this.movieNetflix.keyYT,
      suggestedQuality: 'hd1080',
      events: {
        onReady: (event: any) => {
          this.ytEvent = event;
        },
        onStateChange: (event: any) => {
          if (event.data === YT.PlayerState.ENDED) {
            this.player.getIframe().setAttribute('class', 'hidden');
            this.endVideo.next(true);
            console.log('The video has ended');
          }
        },
      },
      playerVars: {
        autoplay: 1,
        showinfo: 0,
        modestbranding: 1,
        mute: 1,
      },
    });
    this.player
      .getIframe()
      .setAttribute('class', 'absolute top-0 left-0 w-full h-full');
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
  playVideo() {
    this.player.playVideo();
  }
  unMuteVideo() {
    this.player.unMute();
  }
  muteVideo() {
    this.player.mute();
  }
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.isMuted ? this.unMuteVideo() : this.muteVideo();
  }
}

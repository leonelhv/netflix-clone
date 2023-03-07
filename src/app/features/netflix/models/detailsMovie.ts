import { Cast } from '../interfaces/detailsmedia';
import { VideoInfo } from '../interfaces/videoMedia';
import { DataMovie } from './dataMovie';

export class DetailsMediaModel extends DataMovie {
  casts: Cast[];
  videos: VideoInfo[];
  mediaSimilar: DataMovie[];
  constructor(data: any) {
    super(data);
    this.casts = data.casts;
    this.videos = data.videos;
    this.mediaSimilar = data.mediaSimilar;
  }
}

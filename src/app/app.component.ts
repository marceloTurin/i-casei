import { Component } from '@angular/core';
import { VideosThumbnailService } from './videos-thumbnail/video-thumbnail/video-thumbnail.service';



const API = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
const APIKey =  'AIzaSyBlcCSVJHndx4Qw1pyeLy-a1t0vfxf1b3U';
const termoBusca = 'Kimetsu no Yaiba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  videos: Object[] = [];
 

  constructor(videoService: VideosThumbnailService){ //Injetando o servico de video service

    videoService
      .pesquisaVideos('Kimetsu no Yaiba')
      .subscribe(videos => this.videos = videos.items);
  }
  
}


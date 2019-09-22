import { Component, OnInit } from '@angular/core';
import { VideosThumbnailService } from '../video-thumbnail/video-thumbnail.service';

@Component({
  selector: 'app-lista-videos-thumbnail',
  templateUrl: './lista-videos-thumbnail.component.html',
  styleUrls: ['./lista-videos-thumbnail.component.css']
})
export class ListaVideosThumbnailComponent implements OnInit {

  videos: Object[] = [];
 

  constructor(private videoService: VideosThumbnailService){} //Injetando o servico de video service

  ngOnInit():void{
    this.videoService
      .pesquisaVideos('Kimetsu no Yaiba')
      .subscribe((videos)=>{
        this.videos = videos
        console.log(this.videos)
      });
  }
}

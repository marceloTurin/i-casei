import { Component, OnInit } from '@angular/core';
import { VideosThumbnailService } from '../video-thumbnail/video-thumbnail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-videos-thumbnail',
  templateUrl: './lista-videos-thumbnail.component.html',
  styleUrls: ['./lista-videos-thumbnail.component.css']
})
export class ListaVideosThumbnailComponent implements OnInit {

  videos: Object[] = [];
 

  constructor(
    private videoService: VideosThumbnailService,
    private activatedRoute : ActivatedRoute
    ){} //Injetando o servico de video service

  ngOnInit():void{

    const termoPesquisado =  this.activatedRoute.snapshot.params.termoPesquisado

    this.videoService
      .pesquisaVideos(termoPesquisado)
      .subscribe((videos)=>{
        this.videos = videos
        console.log(this.videos)
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { VideosThumbnailService } from '../video-thumbnail/video-thumbnail.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-lista-videos-thumbnail',
  templateUrl: './lista-videos-thumbnail.component.html',
  styleUrls: ['./lista-videos-thumbnail.component.css']
})

@Injectable({providedIn: 'root'})
export class ListaVideosThumbnailComponent implements OnInit {

  videos = [];
  proximosVideos = [];
  buscaInput: string = '';
 

  constructor(
    private videoService: VideosThumbnailService,
    private activatedRoute : ActivatedRoute
    ){} //Injetando o servico de video service

  ngOnInit():void{

    this.activatedRoute.queryParams.subscribe( params => this.buscaInput = params.termoPesquisado )
    this.pesquisaVideo(this.buscaInput)   
  }

  pesquisaVideo(buscaInput: string){
    this.videoService
      .pesquisaVideos(buscaInput)
      .subscribe((videos)=>{
        this.videos = [];
        this.videos.push(videos)
      });
  }

  loadVideo(){
    this.videoService
      .loadVideo(this.pegarTokenPagina(),this.buscaInput)
      .subscribe((proximosVideos)=>{
          this.videos.push(proximosVideos)
      })
  }
  
  pegarTokenPagina(){
    let token = this.videos[this.videos.length -1]
    return token.nextPageToken
  }
}

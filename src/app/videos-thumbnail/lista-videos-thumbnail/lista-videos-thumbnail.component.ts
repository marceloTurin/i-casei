import { Component, OnInit } from '@angular/core';
import { VideosThumbnailService } from '../video-thumbnail/video-thumbnail.service';
import { VideoDetalheService } from '../video-detalhes/video-detalhes.service';
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
  buscaInput: string = '';
 

  constructor(
    private videoService: VideosThumbnailService,
    private activatedRoute : ActivatedRoute,
    private videoDetalheService : VideoDetalheService
    ){} //Injetando o servico de video service

  ngOnInit():void{

    //const termoPesquisado =  this.activatedRoute.snapshot.params.termoPesquisado
    this.activatedRoute.queryParams.subscribe( params => this.buscaInput = params.termoPesquisado )
    this.pesquisaVideo(this.buscaInput)   
  }
  pesquisaVideo(buscaInput: string){
    this.videoService
      .pesquisaVideos(buscaInput)
      .subscribe((videos)=>{
        //this.videos = [];
        this.videos.push(videos)
        console.log(this.videos)
        //this.activatedRoute.snapshot.params.termoPesquisado = buscaInput
      });
  }

  loadVideo(){
    this.videoService
      .loadVideo(this.pegarTokenPagina())
      .subscribe((proximosVideos)=>{
        this.videos.push(proximosVideos)
        console.log(this.videos)
    
      })

  }

  pegarTokenPagina(){
    let token = this.videos.pop()
    //console.log(token.nextPageToken)
    return token.nextPageToken
  }

  grupoColunas(videos:[]){
    const novasLinhas = [];

    for(let index = 0; index < videos.length; index +=3){
      novasLinhas.push(videos.slice(index,index + 3))
    }

    return novasLinhas;
  }
}

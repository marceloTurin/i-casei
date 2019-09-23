import { Component, OnInit } from '@angular/core';
import { VideosThumbnailService } from '../video-thumbnail/video-thumbnail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaVideosThumbnailComponent } from '../lista-videos-thumbnail/lista-videos-thumbnail.component';

@Component({
  selector: 'pesquisa-video',
  templateUrl: './pesquisa-video.component.html',
  styleUrls: ['./pesquisa-video.component.css']
})
export class PesquisaVideoComponent implements OnInit {


  buscaInput: string = '';
  termoUrl: string =  '';
 

  constructor(
    public listaVideo: ListaVideosThumbnailComponent,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ){} //Injetando o servico de video service
  pesquisaVideo(buscaInput: string){
      if(this.pegaRotaAtual() == '/home'){
        this.router.navigate(['/videos'], 
        { queryParams: {termoPesquisado : buscaInput }})
      }
      else {
        this.listaVideo.pesquisaVideo(buscaInput)
        this.router.navigate(['/videos'], 
        { queryParams: {termoPesquisado : buscaInput }})
      } 
  }



  ngOnInit() {
    this.animacaoPesquisa()
    //this.pesquisaVideo()
  }


  pegaRotaAtual() {
    let url = this.router.url;
    let rotaAtual = url.split("?")
    return rotaAtual[0]
  }

  animacaoPesquisa(){
    let rotaAtual = this.pegaRotaAtual()
    if(rotaAtual == '/videos') {
      document.querySelector("#pesquisa").classList.add('animaIn')
      document.querySelector("#pesquisa").classList.remove('center');
    } 
    
  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDetalheService } from './video-detalhes.service';

@Component({
  selector: 'app-video-detalhes',
  templateUrl: './video-detalhes.component.html',
  styleUrls: ['./video-detalhes.component.css']
})
export class VideoDetalhesComponent implements OnInit {

  videoID : string;
  videoDetalhe = [];

  constructor(private activatedRoute: ActivatedRoute,private detalheService : VideoDetalheService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params => this.videoID = params.videoID )
    this.getDetalhe()
  }


  getDetalhe(){
    this.detalheService
      .mostraDetalhe(this.videoID)
      .subscribe((detalheVideo)=>{
        this.videoDetalhe = detalheVideo
        console.log(this.videoDetalhe)
      })
  }

  voltarVideo() {
    window.history.back();
  }

}

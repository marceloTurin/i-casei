import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'video-thumbnail',
    templateUrl: 'video-thumbnail.component.html'
})
export class VideoThumbnailComponent {

    //Passando dados na forma declarativa do componente
    @Input() url = '';
    @Input() tituloVideo = '';
    @Input() nomeCanal = '';
    @Input() descricaoVideo = '';
    @Input() videoID : Object[] = [];

    constructor(private router : Router){}

    detalheVideo(videoID : string){
        this.router.navigate(['/videoDetalhes'], 
        { queryParams: {videoID }})
    }

}
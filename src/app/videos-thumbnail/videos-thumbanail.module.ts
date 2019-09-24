import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa as diretivas do angular

import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ListaVideosThumbnailComponent } from './lista-videos-thumbnail/lista-videos-thumbnail.component';
import { HomeComponent } from './home/home.component';
import { VideoDetalhesComponent } from './video-detalhes/video-detalhes.component';
import { PesquisaVideoComponent } from './pesquisa-video/pesquisa-video.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'


@NgModule({
    declarations: [
        VideoThumbnailComponent,
        ListaVideosThumbnailComponent,
        HomeComponent,
        VideoDetalhesComponent,
        PesquisaVideoComponent
    ],
    exports: [
        VideoThumbnailComponent,
        HomeComponent,
        ListaVideosThumbnailComponent
    ],
    imports:[
        CommonModule,
        AngularFontAwesomeModule
    ]
})
export class VideosThumbnailModule {

}
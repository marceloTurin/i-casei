import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa as diretivas do angular

import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ListaVideosThumbnailComponent } from './lista-videos-thumbnail/lista-videos-thumbnail.component';


@NgModule({
    declarations: [
        VideoThumbnailComponent,
        ListaVideosThumbnailComponent
    ],
    exports: [VideoThumbnailComponent],
    imports:[
        CommonModule
    ]
})
export class VideosThumbnailModule {

}
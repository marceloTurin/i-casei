import {NgModule} from '@angular/core';

import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ListaVideosThumbnailComponent } from './lista-videos-thumbnail/lista-videos-thumbnail.component';

@NgModule({
    declarations: [
        VideoThumbnailComponent,
        ListaVideosThumbnailComponent
    ],
    exports: [VideoThumbnailComponent]
})
export class VideosThumbnailModule {

}
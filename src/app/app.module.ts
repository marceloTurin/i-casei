import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { VideoThumbnail } from './video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoThumbnail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

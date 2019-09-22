import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideosThumbnailModule } from './videos-thumbnail/videos-thumbanail.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideosThumbnailModule // Carregando os componentes que faz parte de Videos Thumbnails
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideosThumbnailModule } from './videos-thumbnail/videos-thumbanail.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideosThumbnailModule, // Carregando os componentes que faz parte de Videos Thumbnails
    HttpClientModule, //Importondo o HttpCliente na aplicação
    AppRoutingModule, //Importando o componente que faz as rotas do aplicativo
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

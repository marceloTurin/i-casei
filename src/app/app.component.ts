import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
const APIKey =  'AIzaSyBlcCSVJHndx4Qw1pyeLy-a1t0vfxf1b3U';
const termoBusca = 'Kimetsu no Yaiba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  videos: Object[] = [];
 

  constructor(http: HttpClient){ //Injetando o HttpClient 

    http.get<Object[]>(`${API}${termoBusca}&key=${APIKey}`)
      .subscribe(videos => {
        console.log(videos.items);
        this.videos = videos.items;
      });

  }
  
}


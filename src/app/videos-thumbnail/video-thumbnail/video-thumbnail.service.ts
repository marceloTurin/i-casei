import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const API = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
const APIKey =  'AIzaSyBlcCSVJHndx4Qw1pyeLy-a1t0vfxf1b3U';


@Injectable({providedIn: 'root'}) //Fazendo o serviço ficar disponivel em qualquer instancia da aplicação
 export class VideosThumbnailService {

    constructor(private http: HttpClient){} //Injetando o serviço 

    pesquisaVideos(termoPesquisado: string){

         return this.http
        .get<Object[]>(`${API}${termoPesquisado}&key=${APIKey}`);
    }
}
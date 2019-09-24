import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


const API = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=';
const APIKey =  'AIzaSyBLSSKseXnCepxJQZ6n4N8o8iKr-2og6Io';


@Injectable({providedIn: 'root'}) //Fazendo o serviço ficar disponivel em qualquer instancia da aplicação
 export class VideosThumbnailService {

    constructor(
        private http: HttpClient,
        private activatedRote: ActivatedRoute
    ){} //Injetando o serviço 

    pesquisaVideos(termoPesquisado: string){

         return this.http
        .get(`${API}${termoPesquisado}&key=${APIKey}`);
    }

    loadVideo(tokenPagina: string){
        console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=casa&type=video&key=${APIKey}&pageToken=${tokenPagina}`)
        return this.http
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=casa&type=video&key=${APIKey}&pageToken=${tokenPagina}`)
    }
}
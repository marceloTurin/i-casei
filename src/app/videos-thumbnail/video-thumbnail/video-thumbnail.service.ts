import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


const API = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=9&q=';
const APIKey =  'AIzaSyBDCs4rI1LFvd29dvPq4QEAueTvJRRaYqE';


@Injectable({providedIn: 'root'}) //Fazendo o serviço ficar disponivel em qualquer instancia da aplicação
 export class VideosThumbnailService {

    constructor(
        private http: HttpClient,
        private activatedRote: ActivatedRoute
    ){} //Injetando o serviço 

    pesquisaVideos(termoPesquisado: string){
         console.log(`${API}${termoPesquisado}&key=${APIKey}`)   
         return this.http
        .get(`${API}${termoPesquisado}&key=${APIKey}`);
    }

    loadVideo(tokenPagina: string, termoPesquisado: string){
        console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=casa&type=video&key=${APIKey}&pageToken=${tokenPagina}`)
        return this.http
        .get(`${API}${termoPesquisado}&key=${APIKey}&pageToken=${tokenPagina}`)
    }
}
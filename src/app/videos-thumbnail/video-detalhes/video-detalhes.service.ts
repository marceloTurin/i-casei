import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


const API = 'https://www.googleapis.com/youtube/v3/videos?id=';
const APIKey =  'AIzaSyBDCs4rI1LFvd29dvPq4QEAueTvJRRaYqE';


@Injectable({providedIn: 'root'})
 export class VideoDetalheService {

    constructor(
        private http: HttpClient,
        private activatedRote: ActivatedRoute
    ){} //Injetando o serviço 

    mostraDetalhe(videoID: string){
        console.log(`${API}${videoID}&part=snippet,statistics&key=${APIKey}`)
         return this.http
        .get<Object[]>(`${API}${videoID}&part=snippet,statistics&key=${APIKey}`);
    }
}
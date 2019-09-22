import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  videos = [
    {
      url: 'https://www.animenew.com.br/wp-content/uploads/2018/05/Kimetsu-no-Yaiba-est%C3%BAdio-ufotable.jpg',
      tituloVideo: 'Titulo video 1',
      nomeCanal: 'Nome do canal',
      descricaoVideo: 'Descricao do video'
    },
    {
      url: 'https://www.animenew.com.br/wp-content/uploads/2018/05/Kimetsu-no-Yaiba-est%C3%BAdio-ufotable.jpg',
      tituloVideo: 'Titulo video 2',
      nomeCanal: 'Nome do canal 2',
      descricaoVideo: 'Descricao do video 2'
    }
  ]
}


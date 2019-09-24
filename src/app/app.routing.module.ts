import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListaVideosThumbnailComponent } from "./videos-thumbnail/lista-videos-thumbnail/lista-videos-thumbnail.component";
import { HomeComponent } from "./videos-thumbnail/home/home.component";
import { VideoDetalhesComponent } from "./videos-thumbnail/video-detalhes/video-detalhes.component";

const routes:Routes = [
    {path: '',redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'videos',component:ListaVideosThumbnailComponent},
    {path: 'videoDetalhes',component: VideoDetalhesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
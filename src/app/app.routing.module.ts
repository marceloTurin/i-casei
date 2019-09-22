import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListaVideosThumbnailComponent } from "./videos-thumbnail/lista-videos-thumbnail/lista-videos-thumbnail.component";

const routes:Routes = [
    {path: ':termoPesquisado',component:ListaVideosThumbnailComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
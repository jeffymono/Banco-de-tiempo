import { InicioComponent } from './inicio/inicio.component';
import { PublicarComponent } from './publicar/publicar.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'publicar', component: PublicarComponent },
  { path: 'mis-publicaciones', component: MisPublicacionesComponent },
  { path: 'contacto', component: ContactoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ],
})
export class AppRoutingModule { }

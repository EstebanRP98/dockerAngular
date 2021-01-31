import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  {path:'', component: PeliculasComponent},
  {path:'peliculas', component: PeliculasComponent, children:[{path:'agregar',component: FormularioComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

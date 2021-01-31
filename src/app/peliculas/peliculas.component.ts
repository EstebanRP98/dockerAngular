import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaService } from '../pelicula-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[]=[];

  constructor(private peliculaService :PeliculaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.peliculaService.obtenerPeliculas()
    .subscribe(
      (peliculasObtenidas: Pelicula []) => {
        this.peliculas = peliculasObtenidas;
        this.peliculaService.setPeliculas(this.peliculas);
        console.log("peliculas obtenidas"+this.peliculas);
      }
    );
  }

  irAgregar(){
    console.log("agregar");
    this.router.navigate(['./peliculas/agregar']);

  }
}

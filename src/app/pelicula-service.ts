import { Injectable } from "@angular/core";
import { Pelicula } from './pelicula.model';
import { DataService } from './data-service';

@Injectable()
export class PeliculaService {

    peliculas: Pelicula[]=[];

    constructor(private dataService: DataService){}

    setPeliculas(peliculas: Pelicula[]){
        this.peliculas = peliculas;
    }

    obtenerPeliculas(){
        return this.dataService.cargarPeliculas();
    }

    agregarPelicula(pelicula: Pelicula){
        console.log("ingresar pelicula"+ pelicula.nombre);
        this.dataService.agregarPelicula(pelicula).subscribe(
          (pelicula: Pelicula) => {
              console.log("se agrega la pelicula"+pelicula.nombre);
              this.peliculas.push(pelicula);
          }  
        );
    }

}

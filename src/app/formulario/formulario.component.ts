import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula-service';
import { Pelicula } from '../pelicula.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  idPelicula: number;
  nombreInput: string;
  descripcion: string;

  constructor(private peliculaService: PeliculaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onGuardarPelicula(){
    const peliculaNueva = new Pelicula(this.idPelicula, this.nombreInput,this.descripcion);
    this.peliculaService.agregarPelicula(peliculaNueva);
    this.router.navigate(['/peliculas']);
  }

}

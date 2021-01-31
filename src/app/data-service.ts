import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Pelicula } from "./pelicula.model";

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}

    urlBase="http://localhost:8082/RestDocker/webservice/peliculas";

    cargarPeliculas(){
        return this.httpClient.get(this.urlBase);
    }

    agregarPelicula(pelicula: Pelicula){
        return this.httpClient.post(this.urlBase,pelicula);
    }

    
}

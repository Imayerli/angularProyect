import { Injectable } from '@angular/core';
import { Libro } from '../_models/libro';
import { Autor } from '../_models/autor';
import { Prestamo } from '../_models/prestamo';
import { PrestamoLibro } from '../_models/prestamolibro';
import { Respuesta } from '../_models/respuesta';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsrestService {
  direccion='http://25.20.13.215/libros';
  direccionAutor='http://25.20.13.215/autores';
  direccionPrestamo='http://25.20.13.215/prestamo';
  direccionResePres='http://25.90.85.125:8080/prestamo';

  constructor(private http: HttpClient) { }

  public consultarLibro():Promise<Libro>{
    console.log('Entro .. Servicio')
    return this.http.get<Libro>(this.direccion).toPromise();

  }

  public consultarAutor():Promise<Autor>{
    console.log('Entro .. Servicio')
    return this.http.get<Autor>(this.direccionAutor).toPromise();

  }
  public consultarPrestamo():Promise<Prestamo>{
    console.log('Entro .. Servicio')
    return this.http.get<Prestamo>(this.direccionPrestamo).toPromise();

  }
  public reservarLibro(prestamoLibro :PrestamoLibro):Promise<Respuesta>{
    return this.http.post<Respuesta>(this.direccionResePres,prestamoLibro).toPromise();
  }
}

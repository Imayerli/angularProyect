import { Component, OnInit  } from '@angular/core';
import { Libro } from './_models/libro';
import { Autor } from './_models/autor';
import { Prestamo } from './_models/prestamo';
import { PrestamoLibro } from './_models/prestamolibro';
import { Respuesta } from './_models/respuesta';

import { ConsrestService } from './_services/consrest.service';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cliBiblioteca-app';

  resp:string;
  libros: Libro[];
  autores: Autor[];
  prestamos: Prestamo[];

  constructor(private insserv : ConsrestService) { }

  ngOnInit() {
        this.loadAllLibros();
        this.loadAllAutores();
        this.loadAllPrestamos();
  }

  private loadAllLibros(): void {
    let promise = new Promise((resolve ,reject) =>
    {
      const rtaserv : Promise<Libro> = this.insserv.consultarLibro();
      rtaserv.then((data : any) => {
            // succes
            this.libros = data;
            console.log("OK");
            console.log(data.titulo);
            resolve();
          
          }, (error) => {
            console.log("Error al consumir servicio");
            reject(error);
          }
      );
    }

    )
  }


  private loadAllAutores(): void {
    let promise = new Promise((resolve ,reject) =>
    {
      const rtaservA : Promise<Autor> = this.insserv.consultarAutor();
      rtaservA.then((data : any) => {
            // succes
            this.autores = data;
            console.log("OK Autores");
            resolve();
          
          }, (error) => {
            console.log("Error al consumir servicio");
            reject(error);
          }
      );
    }

    )
  }

  private loadAllPrestamos(): void {
    let promise = new Promise((resolve ,reject) =>
    {
      const rtaservP : Promise<Prestamo> = this.insserv.consultarPrestamo();
      rtaservP.then((data : any) => {
            // succes
            this.prestamos = data;
            console.log("OK Autores");
            resolve();
          
          }, (error) => {
            console.log("Error al consumir servicio");
            reject(error);
          }
      );
    }

    )
  }

  reservarLibro(libroresv :string) : void{
    alert("Libro Reservado: "+libroresv);
    var prestamo = new PrestamoLibro();
    prestamo.lector.nombre = "Pepito";
    prestamo.lector.identificacion = "34567823";
    prestamo.lector.telefono = "1233243";
    prestamo.lector.estado = "Habilitado";
    prestamo.prestamo.f_devolucion = "28 may 2020";
    prestamo.prestamo.f_entrega = "10 jun 2020";
    prestamo.prestamo.isbn = libroresv;
    prestamo.prestamo.multa = "false";
    

    let promise = new Promise((resolve ,reject) =>
    {
      const rtaservPre : Promise<Respuesta>  = this.insserv.reservarLibro(prestamo);
      rtaservPre.then((data) => {
            console.log("OK Reserva");
            alert("Libro Reservado: "+libroresv + " -- "+ data);
            resolve();
          
          }, (error) => {
            console.log("Error al consumir servicio");
            reject(error);
          }
      );
    }
    )

}

 
}


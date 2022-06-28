import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') _txtBuscar ! : ElementRef<HTMLInputElement>;
  //Va a buscar en el HTML un elemento que se llame "txtBuscar" y lo
  // va a asignar a _txtBuscar
  //el ! es el not null assertion operator, para indicarle a Angular q no de bola
  //a que el elemento puede ser nulo, yo estoy seguro que no va a ser nulo
  //ElementRef es el tipo, mas precisamente el HTMLInputElement

  constructor(private gifsService: GifsService) { }

  buscar (){
    const valor = this._txtBuscar.nativeElement.value;
    if (valor.trim().length === 0)
      return; //Para no hacer nada cuando sea vacio

    this.gifsService.buscarGifs(valor)

    this._txtBuscar.nativeElement.value = ''
  }



}

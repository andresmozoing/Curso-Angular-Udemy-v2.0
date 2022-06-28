import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  constructor( private dbzService: DbzService) { }

  @Input()
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  // @Output()
  // onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter()

  agregar(){
    if (this.nuevo.nombre.trim().length === 0 ){
      return; //Si no tiene nada el campo, sale del metodo
    }

    // this.onNuevoPersonaje.emit(this.nuevo) //Emitimos el valor
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo = {nombre : "" , poder : 0}
  }
}

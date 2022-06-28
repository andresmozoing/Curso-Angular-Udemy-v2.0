import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

@Injectable() //Esta clase se va a poder inyectar
export class DbzService {

    //Propiedades
    private _personajes : Personaje [] = [
        {
        nombre: "Goku",
        poder: 16000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
      ]
    
    //Getters y setters
    get personajes(): Personaje[]{
        return [...this._personajes]
    }
    
    //Constructor
    constructor(){
        console.log("servicio inicializado")
    }

    //Metodos
    agregarPersonaje (personaje :Personaje){
        this._personajes.push(personaje)
    }

}
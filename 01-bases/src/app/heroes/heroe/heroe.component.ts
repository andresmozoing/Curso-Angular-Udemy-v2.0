import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: String = "Ironman"
    edad : number = 45

    obtenerNombre():String{
        
        return `${this.nombre} - ${this.edad}`
        //Es lo mismo que:
        //return this.nombre + " - " + this.edad.toString();
    }

    //getter 
    get nombreCapitalizado(): String{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad():void{
        this.edad = 30;
    }


    
}
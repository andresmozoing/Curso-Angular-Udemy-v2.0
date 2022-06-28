import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent   {

  heroes : String[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']

  heroesBorrados: String [] = [];

  borrarHeroe():void{
    if (this.heroes.length > 0){
      let heroeAborrar2: String = this.heroes.pop() || '' ;
      this.heroesBorrados.push(heroeAborrar2);
    }
  }

}

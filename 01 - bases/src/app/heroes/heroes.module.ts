import { CommonModule } from "@angular/common"; 
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //dicen las cosas q van a tener mi modulo
                    // lo q esta aca solo lo puede ver y usar este modulo 
                    //y los componentes de este modulo
        HeroeComponent,
        ListadoComponent 
    ],
    //cosas q quiero q sean visibles desde fuera del modulo
    exports:[
        ListadoComponent
    ],
    imports:[ //Aca gralmente solo van modulos
        //CommonModule

    ]
})

export class HeroesModule {

}
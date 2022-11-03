import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    exports: [
        ListadoComponent
    ],

    imports: [
        CommonModule //Para trabajar con ng if y ngfor
    ]
})

export class HeroesModule {

}
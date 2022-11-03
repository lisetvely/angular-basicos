import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Iroman';
    edad   : number = 45

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    ObtenerNombre (): string{
        return  `${ this.nombre} - ${ this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        //Para ver el cambio
        console.log('hey....');
        this.edad = 30;
    }
}
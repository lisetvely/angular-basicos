import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Luki'];
  heroeBorrado?: string = '';

  borrarHeroe(): void {
    console.log('borrando....');

    this.heroeBorrado = this.heroes.shift() || '';

    //this.heroeBorrado = Borrado?.toString();

    //console.log(Borrado);
  }

  existeHereoBorrado(): boolean{
    if (this.heroeBorrado != '')
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}

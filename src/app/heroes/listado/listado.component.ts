import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string [] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];

  HeroeBorrado: string = '' ;

  borrarHeroe(): void{

    const heroeBorrado = this.heroes.shift();
    this.HeroeBorrado = heroeBorrado;
  }

}
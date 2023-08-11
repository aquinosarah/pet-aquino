import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class ProdutosComponent {

  constructor(private router: Router) { }

  verDetalhes(produtoId: string) {
    this.router.navigate(['/detalhes', produtoId]);
  }

  toogleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito
  }


  nome: string = 'Pet';
  sobrenome: string = 'Aquino';
  data: any = new Date();
  produtos: Array<any> = [
    {
      id: 1,
      titulo: 'Ração Golden',
      foto: 'https://i.ibb.co/WgXN6tG/racao-png.webp',
      sabor: 'frango',
      kg: 3,
      preco: 190,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Ração Golden ',
      foto: 'https://i.ibb.co/sFtR2Hm/racao-carne.webp',
      sabor: 'carne',
      kg: 6,
      preco: 120,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Ração Golden (filhote)',
      foto: 'https://i.ibb.co/LZM5thY/filhote-png.png',
      sabor: 'carne',
      kg: 6,
      preco: 100,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Ração Golden(gato)',
      foto: 'https://i.ibb.co/4F4xm6H/gato-png.webp', 
      sabor: 'carne',
      kg: 1,
      preco: 30,
      favorito: false
    },
    {
      id: 5,
      titulo: 'biscoito para gato',
      foto: 'https://i.ibb.co/d7WmRNN/cookie-gato.png', 
      sabor: 'carne',
      kg: 1,
      preco: 12,
      favorito: false
    },
    {
      id: 6,
      titulo: 'biscoito para cachorro',
      foto: 'https://i.ibb.co/tmsG61R/apartamento.jpg',
      sabor: 'carne',
      kg: 6,
      preco: 120,
      favorito: false
    },
    {
      id: 7,
      titulo: 'Ração',
      foto: 'https://i.ibb.co/tmsG61R/apartamento.jpg',
      sabor: 'carne',
      kg: 6,
      preco: 120,
      favorito: false
    },
    {
      id: 6,
      titulo: 'Ração',
      foto: 'https://i.ibb.co/tmsG61R/apartamento.jpg',
      sabor: 'carne',
      kg: 6,
      preco: 120,
      favorito: false
    },
  ];
}
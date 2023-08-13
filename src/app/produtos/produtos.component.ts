import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, CommonModule, MatIconModule ]
})
export class ProdutosComponent {
  imagens: string[] = [];
  indexImagemAtiva: number = 0;
  
  pararTimer() {
    
  }
  ativarImagem(index: number) {
    
  }

  toggleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito
  }
  verDetalhes(id: number) {
    
  }


  texto: string = 'Welcome to the Five Nights at Freddy s!';
  data: any = new Date();
  produtos: Array<any> = [
    {
      id: 1,
      titulo: 'Golden de frango',
      foto: 'https://i.ibb.co/LZM5thY/filhote-png.png',
      preco: 200,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Golden cookie',
      foto: 'https://i.ibb.co/Q61xkZt/biscoito-cachorro-png.webp',
      preco: 150,
      favorito: true
    },
    {
      id: 3,
      titulo: 'Golden de carne',
      foto: 'https://i.ibb.co/sFtR2Hm/racao-carne.webp',
      preco: 140,
      favorito: true
    },
    {
      id: 4,
      titulo: 'Golden salmão',
      foto: 'https://i.ibb.co/4F4xm6H/gato-png.webp',
      preco: 120,
      favorito: true
    },
    {
      id: 5,
      titulo: 'Premier cookie',
      foto: 'https://i.ibb.co/d7WmRNN/cookie-gato.png',
      preco: 250,
      favorito: true
    },
    {
      id: 6,
      titulo: 'Premier',
      foto: 'https://i.ibb.co/9TJv53j/racao-gato.webp',
      preco: 100,
      favorito: true
    },
    { 
      id:7,
      titulo: 'Bolinha',
      foto:'https://i.ibb.co/zR7PhyX/bolinha2.webp',
      preco:80,
      favorito: true
    },
    { 
      id:8,
      titulo: 'modedor',
      foto:'https://i.ibb.co/nky5qdm/cachorro3.webp',
      preco:90,
      favorito: true
    },
    { 
      id:8,
      titulo: 'Brinquedo Interativo ',
      foto:'https://i.ibb.co/N10PpLt/paragatos.webp',
      preco:97,
      favorito: true
    }


  ];
}

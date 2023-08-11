import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'], 
  standalone: true,
  imports: [NgFor, NgIf],
})
export class DetalhesComponent implements OnInit {

velaId!: string;

  constructor (private router: ActivatedRoute) { }

  ngOnInit (){
    this.router.paramMap.subscribe(params => {
      this.velaId = params.get('id') ?? '';
    })
  }

  //OBJETO DAS VELAS AROMÁTICAS
  velas: Array<any> = [
    {
      id: 1,
      titulo: 'Ração de frango',
      foto: 'https://i.ibb.co/mRTrXJK/baunilha.png',
      descricao: 'Golden',
    
    },
    {
      id: 2,
      titulo: 'Ração de frango',
      foto: 'https://i.ibb.co/VT55kMn/frango2-png.jpg',
      kg : 1,
      preco: 190,
      favorito: true
    },
    {
      id: 3,
      titulo: 'Biscoito natural',
      foto: 'https://i.ibb.co/1ryk4gt/biscoito-png.jpg',
      gramas: 300,
      preco: 90.00,
      favorito: true
    },
  ]
}
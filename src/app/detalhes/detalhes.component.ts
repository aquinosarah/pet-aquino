import { Component } from '@angular/core';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'], 

})
export class DetalhesComponent {

  titulo: string = 'produtos';
  foto1: string = 'https://i.ibb.co/wMzdvN8/juntos.jpg';
  foto2: string = 'https://i.ibb.co/VDBQj09/estrelas.png';

  description: string = 'Pet Aquino se preocupa com bem-estar do seu pet.';
  description2: string = 'É por isso que só trabalhamos com podutos de qualidade.';
  description4: string = '1000aliações | Sem perguntas'

}

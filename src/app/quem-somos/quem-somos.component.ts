import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {

  titulo: string = 'Sempre em busca de melhores momento com seu pet!';
  foto: string = 'https://i.ibb.co/dGZHJSX/1.png';

  description: string = 'Há muitos anos, em uma cidade cercada por natureza, um mulher chamada Sarah Aquino,ama de animais, fundou a loja "Pet Aquino" para atender às necessidades dos animais da região. Ela sonhava em criar um espaço onde amantes de animais pudessem se reunir, compartilhar histórias e cuidar de seus companheiros peludos. A loja rapidamente se tornou um local de encontro, oferecendo produtos de qualidade,  serviços de cuidados e apoio à comunidade animal. A visão de Daniel demonstra como a paixão por animais e a dedicação podem criar um impacto significativo no mundo.'
}
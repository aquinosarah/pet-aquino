import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class HomeComponent {
  produtos: any;

  constructor(private router: Router) { }

  verDetalhes(produtosId: string) {
    this.router.navigate(['/detalhes', produtosId]);
  }

  toogleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito
  }


  nome: string = 'Sarah';
  sobrenome: string = 'Aquino';
  data: any = new Date();
  produto: Array<any> = [
    {
      id: 1,
      titulo: 'Ração Golden',
      foto: 'https://www.google.com/aclk?sa=l&ai=DChcSEwip9fja_cuAAxVE5lwKHR32Cs0YABADGgJjZQ&ase=2&gclid=Cj0KCQjwrMKmBhCJARIsAHuEAPSbKbK_OwtVIXS2urraestdEXO8gafigswQdvlyl589sjcSMfgJ_IgaAm9xEALw_wcB&sig=AOD64_0E2y7h7oj8nquN41_VjepCigBBOg&ctype=5&nis=5&adurl&ved=2ahUKEwjSqe_a_cuAAxXejJUCHSlUDjUQvhd6BQgBEIMB',
      racao: 1,
      marca: 'golden',
      preco: 190,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Osso natural',
      foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HDxINERARFRAQEhUYFRITFRMQFhcVFhEXGBYSExUgHighJCYlGxkYITEhJikrLi8uFyE/RDMsNygvLzcBCgoKDg0OGxAQGjAlICYyLS8wLzMrLS04Ky01NS0tMi02LS0rLS01LS0rLS0tNTYtLSstLS0tLSs1LS01Ky8tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDAgj/xAA3EAACAQMCBAQEBQMEAwEAAAAAAQIDBBESIQUGMUETIlFhBzJxgSNSkaGxFEJyY8HR8DNzghX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAkEQEAAgIBBAICAwAAAAAAAAAAAQIDESEEEjFBEyJhkTJRsf/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeF1eUrTHiVacNXTXKMMv0WWVnnbm2PA/wabXjNJvOPKpPEfu9/0Obq8ueY1K7epq3y9e8sfmTcttsLou3Ypvmis6iNtGPBNo3M6h3CjcQr50TjLHXS1LH1wep+fOEcer8In4tvOTzJ6syctSUntLPbr9PY7Zyvx2HMFvGvFaZY80PyslTJFkMmKaNuACxUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB81KipRcpNKMU229kklu2B+e+ebyUb2rXnF+L41VNvVjEammNN+qSivZmklzN/RWtWzXj5x5JUZQhBbLGppZazjy/yy38x8Rt76vWryWVXqTcHpz5VFQjlbddPX3KtxKqoTUZxxTjDRHSnp1KO2Zde+dv0MnybtPDfFNVjc6V2w4u026m+ffDf+R274N3kq/jRxiOlPZprOrGF9jhF9ShS605PC+ZZiv3yXn4dcRr8o3FS5qeaMqDg6MW5Zl1huk1s1u/dkvrWYt4RnuvWaxy/RoNHyjzHS5lto14bTW1Snv5ZrGcZ6r0fubw0RMTG4Y5iYnUgAOuAAAAAAAAAAAAAAAAAAAAAAAAABjcQvqfDqcq1WSjCPV/wku7foCI295SUE22klu29kl6s5nzvzer3VbU5qNok/FqPrW/0qfpH1l3/AJ1fN/O9bik5W9JYpR/sTy5f+1r9dKKLdzq39aFN5nThUxJJ+TaLbUsbvzJbd9L9Ci15txDVTHWvNvLOvNdzS8eNN6arxCp5ox38uIZxnD9sbvc13EqV1Ug6dWG1PTHEcNOMFu9Pr/c31bRvLzmSVa2o2fhQjTtvLCXiOpNtNdVhJLssnjYxVaeN4uFPLhUjGhBRkliSk5JvdprbdvpsZo7ot4arTWa7VSNGVSriPiShT6KOei6ZWNvdv0LBZQp28IurdRpqWVBJuUsSw3GMUt+u77HvUtqj8Wn4TlvFpYbjrcVHVJxxJ4lsl6LOM7EU7Z2cXK5pWVHT8k4UoqfTVnKbb9c9heZt5KR28Qtvi0LWlb1KFWdNwTxOHiqNSmknpqOKaUsJYbaecemC6fDTjVXjNk3Vk5ToVHT8SWNU0oxkpSx3xLGe+Djltwa54ncKhHXKdWXd6XJJdG87LG7b7dju/KfAo8u2sbWMtTTlKc8JapyeW0vTsvZIs6asxP4VdVNYrr23AANjAkEEgAAAAAAAAAAAAAAAAAAAAKlznzvS5blG3hSlXu6q8lGGyXo6kt8fZNnJmI5l2KzM6hZb68p2FOVarNRpwWXJ/wDf2OUcYuL3nSrOq3/T2VH/AMLbzJyT3co/mfp26ep91rO545P+q4lcS8NSi421JNUaedlGON5vfeb9+iNleXTqKNCjFRoU1u1hN4fRe3Tpvv2POz9XFuK+Ho4OmmvM+f8AHPL6jGzk6X9+XnGyScd8uW++c436mo/q426cI1cJ77bSbxh+VJt+y7Fj4zaS4k6lTLhQj82mOJSeX3fr1b7+5pqdK34enXjTw8YSm3Uk3nr6L7CuSIj8rpruWPTuJUoa4SdP3S8+fVSe6+258viTo706UdWMudacq06ksY1Nt5X+LPXg8rnjLnHwNWW3HwoObWH0WMlw4f8ADa84kk6lCNOOzTrS0yXq1CLfX3RbWtp40pvekc7c+vb2vxaSU1meFmUE0klthdkWLhXDq3E9FKnSqTqzaw9umcebKaxjq+mO51DhXwxt7dR8ao56d9MIqEc793l930wXDhfCbfhMXChSjBPq1lyf+Unlv7ssjDvypt1Ov4tJyhyfDgP405upcuOHPoknjKS+3X3fq82gA0RGvDJMzM7kAB1wAAEggASAAAAAAAAAAAAAEZPG7vKdmtVSSit+vfCy8Ip0eaanMFV0rRQdGDcatTL2ksZhF4w+u7z/ACV5MsUhZjxTdvOLcc8HNOhHXPOJS/sh06+r3XlRWIcJhZyq3VXEqs5OTkl+JUy35G3nCw0sLHT02MZcSpWynTt8TnTk4SqNbQllPw4x6t7/APOTFhdyvJaZanUxjf5c928HlZs1rc2/T1sHTxWPr+3teXiucR8PFRvyx1aowWcapY7+x6SUbSCjKXTbfG+ere38GDdX9Pg+JzlrqS6JbbpbLBhcMoX3NNRqnBRg35qss6YrO+PV4M8VvlniGi01pHPhj8wX8nB21vSlUlPpGKz7Z/dGdyn8K6t1or8QqShBYatqcsSftUmun0Tz7o6RwHlu34Iswjqqv5qst5Pbt6L2RuD1un6bsr9vLyc/Vd06pxDHsbGjw+Cp0acIQisJRSRkAGtjAAAAAAAAAAAAAEgAAAAAAAAr3F+c7DhTlGdXVOK3jSTqNezkvKvu0VW9+JtW6cY2VqpKTxqquOcrqlBTT69HncrnLWPa2uG9vTo1xcQtouc5RjFdZSaS/Uo/MHxIoW2qnbJzmlvNxeF22j1/XH3KbzHzHXuYVKl1Vx8umhBxlOCb/JBySy9suT2RUqHEoxqRqaV4bffDafq5PconPa3ERqGvH01Ijdp3P9N1e85zr1JeLr/ExqTilKokt03L2/tW2zwffL/GqduqkLeE4a5yiqayqeptPVqS3eMZe7xjHUrXHakb7EpKKlSUnqjnVFKDxF+zeM46Z7s1vDLt23m1Zl1hjfDaw8yeMPbpg5OKJrtL5dW16dNp13Si4VZrMcuUY5Tbf55d85MWtxmNJNrypx27Lfvj3KZDiVa/qpZzFpJy3eZJZ3+x0n4fckLjGL67T8DP4VF5xPHWdTO+M9um3oZq9NNp01W6mta7YvJ3KdTmmSuq2uFqnlSeU63qop76ffb7nX7Kzp2FONGlBRhFYSSwe0IKmlFJJJYSWySXRJEno48VaRw8nLmtkncgALFIAAAAAAAAAAAAAAACQAAAAA5X8R+YvBvFbOtJ06elOhTfWUoNvxfXGYvHuvU6Lx3ikeC21W7nGc40YOThBZlLslFfU4HzM4p+PXqONzVnObz5sRlWeHBLs1sl6Ipz+NNPTcW7pY1a5je1FFxl4M23JRytov53tvv/ANyekLqlYKO6aUmoqKbfVam8dvqV+149K3qKUabko/Kp7PtvhbLp+3cXnGJ3cnVlSw98uLWF9UmZpwz49Ndc0TzM8tze16V1GtJZ8SpKLWZPDjHL1YW+Us9fT1K/Ur06MsqXy42/Ntvp+jwvueljWj4sKk1mn3XRNNNeue5qriXjTklFwg5YS+fu8RykvRLb+CeLHrhHNk43D0V025y041Rax6KXr+n8nrwm3/q57NZbwo9232TPGnaeJNQz1aT36bbst3BeW1GNCNNSnc1akYwTeEs5y2vZY69G89i3JaIjUKMNZm3db0s/IHK//wC3Vz8tCjtVkk8z/wBOEvff7fVHbaVONGKhFJRikklskl0SRgcvcIp8DtoW0FtFeZ/mk/ml+v8AsbEnjp2wqzZfktv0kgAsUgAAAAAAAAAAAAAAAAAAkAAAABR/iBx6NJxsYuLlNJzi+jjnfK746477ejOJ8yWdK1uKzlV8rnKUW2905Pb64ee79E+h2j4icm1uOShc2ziq9Ps3jP8At26M49x3krikG1VozWX1xmL37YexTaszbbTS9IprXLVVrmwtISUJVa1RwbVTSoQU2vKlBptpN9ZdcdF0NDK6dR5SwvTCS+3/AAb6ly7UtqctdKepYxJJ7eqk1t0y/c+KHDKdntVt5uco7Rm5QSWreSj1T37ibRDsRNvbVV/NFKH1aWdnv29Ht+jM6hFQbqLLhGLxqw9U2sJ/tqx6d9t1p+BGdOEVJ1MZS881jd6Ht2W7XYzbGg7hSU4yjFLfK2is9OnXYjOSIWVxTM8vvgds43VOS+TPztxe+GtWPTP8HZ/hhwNQlO7kk9LxCXXzSXmf2jhf/TOM2146MfJtFuMfNhyb7uL+ueu2D9I8nWv9LY0FjDlTU2v8/Nj7JpfY5Ss2v3SjltFadse26IJINLGAAAAAAAAAAAAAAAAAAACQAAAAAAD5nBTTi0mn1T3PoAfmTnvg93Z3le3rVa1SlTqtwjKpNx8OSzTfXph4z6xZrLOyuauqUFvNaXJycstLCUm99lvlY6H6N5w5bpcfotuK8anGWieyeGmnBv0ee/c4nwmzhOpVovpHS4S82JNKSlFdOzi/dMzZ/rWZbentFpiJhq56LFTUPDjU0Jal5njSm3j1yu+y2NTeXVWlBxcm11kujTeEk12ztt7mzu7aHi1oYepbtrPp5f3yjFs7BXrxHVqz5t44cOr1P19+xnpMRzLZlpPiGXyTwmpx6+oUEpNOUXNrCUIY/ElJ/RNL3Z+oYRUEopbJYX0RQvhTyq+CQrXM6WideSUM5UvCXTy/2p9l1wlnHQvxupHG3lZJ50AAmrAAAAAAAAAAAAAAAkCCQAAAAAAAAAAAA+akFUTi+kk0/o0c8u/h3K21K3nGUG21Gb0yWeyaWH+x0UFd8db+VmPLanhwzmXkjia/Go0ZKcFiWjTUc49cJb9/bf0XU2/wv5DrU5QvLyDhGm34dCccSc1J4nPPZbNL1S6Y364DlcMVWX6i1o5CCQWs6AAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAACASQAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBJAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAkAAAAAAAAAAAAAAAAAD/2Q==',
      osso: 2,
      marca: 'golden',
      preco: 30,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Casa de Campo',
      foto: 'https://i.ibb.co/5h1XHzY/casa-de-campo.jpg',
      quartos: 7,
      banheiros: 5,
      area: 800,
      preco: 1500000,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Flat Minimalista',
      foto: 'https://i.ibb.co/FqSpsYt/flat.jpg',
      quartos: 1,
      banheiros: 1,
      area: 36,
      preco: 180000,
      favorito: false
    },
    {
      id: "rg93h8eirbgrebngn",
      titulo: 'Sala Comercial',
      foto: 'https://i.ibb.co/2nNsFkt/sala-comercial.jpg',
      quartos: 0,
      banheiros: 1,
      area: 25,
      preco: 250000,
      favorito: true
    },
    {
      id: "8493ty34hg489gh",
      titulo: 'Cobertura Duplex',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      quartos: 3,
      banheiros: 3,
      area: 200,
      preco: 1500000,
      favorito: true
    }
  ];
}

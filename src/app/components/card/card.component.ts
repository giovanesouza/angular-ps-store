import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // Propriedades
  @Input()
  gameCover:string = ''; //Utilizado para setar o valor da imagem (bg)

  // Copia do parâmetro do componente label para deixá-lo acessível
  @Input()
  gameLabel:string = '';
  
  // Copia dos parâmetro do componente de preço para deixá-lo acessível
  @Input()
  gameType:string = 'Digital PS4';
  @Input()
  gamePrice:string = 'R$ 399,99';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  // Propriedade para setar o valor da label ao utilizar o componente
  @Input()
  gameLabel:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

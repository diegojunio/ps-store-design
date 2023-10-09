import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  photoCover:string = '';
  
  @Input()
  gameType:string = '';

  @Input()
  gamePlataform:string = '';

  @Input()
  gamePrice:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokedex } from '../../data/pokedex';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public rank: number = 0;
  @Input() public usage: number = 0;
  @Input() public selected: boolean = false;
  public icon: string = '';

  @Output()
  public click: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    const entry = Object.keys(Pokedex).find(entry => Pokedex[entry].name === this.name);
    if (entry) this.icon = Pokedex[entry].miniSprite;
  }

}

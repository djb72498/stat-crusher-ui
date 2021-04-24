import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonUsage } from 'src/models/pokemon-usage';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() public usageStats: PokemonUsage[] = [];
  @Input() public selectedIndex: number = 0;

  @Output() public selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  

}

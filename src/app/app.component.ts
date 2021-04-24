import { Component, OnInit } from '@angular/core';
import { PokemonUsage } from '../models/pokemon-usage';
import { StatsApiService } from './services/stats-api.service';
import { Pokedex } from '../data/pokedex';
import { Abilities } from '../data/abilities';
import { Items } from '../data/items';
import { Moves } from '../data/moves';
import { SpeciesData } from '../models/species-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private selectedTime = '2021-03';
  private selectedFormat = 'gen8vgc2021';
  public selectedElo = 0;

  public isLoading = true;
  public selectedIndex: number = 0;
  public selectedPokemonName: string = '';  // name of pokemon selected (i.e. "Landorus-Therian")
  public selectedPokemon: string = '';      // pokedex key of pokemon selected (i.e. "landorus-therian")
  public selectedSpeciesData: any;          // species metadata from pokedex
  public pokemonUsageInfo: any = null;      // Usage data from api service

  public usageData: PokemonUsage[] = [];

  public abilities: any[] = [];
  public items: any[] = [];
  public moves: any[] = [];
  public natures: any[] = [];

  readonly eloOptions = [
    {
      label: 'Any',
      value: 0
    },
    {
      label: '1500+',
      value: 1500
    },
    {
      label: '1630+',
      value: 1630
    },
    {
      label: '1760+',
      value: 1760
    },
  ]
  readonly itemData = Items;
  readonly moveData = Moves;

  public constructor(
    private statsApi: StatsApiService
  ) {}

  ngOnInit(): void {
    this.getUsageStats();
  }

  private getUsageStats() {
    this.statsApi.getUsage(this.selectedTime, this.selectedFormat, this.selectedElo).subscribe(response => {
      this.usageData = response;
      this.changeSelectedPokemon(0);
    });
  }

  private getPokemonUsageData(): void {
    this.statsApi.getPokemonUsage(this.selectedTime, this.selectedFormat, this.selectedPokemonName, this.selectedElo).subscribe(response => {
      this.pokemonUsageInfo = response;
      this.getAbilities();
      this.getItems();
      this.getMoves();
      this.getNatures();
      this.isLoading = false;
    })
  }

  private getAbilities(): void {
    this.abilities = this.pokemonUsageInfo.abilities.map((a: any) => ({
      name: Abilities[a.value],
      usage: a.usage
    }))
  }

  private getItems(): void {
    let totalUsage = 0, i = 0;
    this.items = [];
    while (i < 11 && i < this.pokemonUsageInfo.items.length) {
      let {value, usage} = this.pokemonUsageInfo.items[i];
      this.items.push({
        name: Items[value].name,
        sprite: Items[value].sprite,
        alt: value,
        usage
      });
      totalUsage += usage;
      i++;
    }
    if (totalUsage !== 1) {
      this.items.push({
        name: 'Other',
        sprite: 'unknown-item.png',
        alt: 'other',
        usage: 1 - totalUsage
      })
    }
  }

  private getMoves(): void {
    let totalUsage = 0, i = 0;
    this.moves = [];
    while (i < 11 && i < this.pokemonUsageInfo.moves.length) {
      let {value, usage} = this.pokemonUsageInfo.moves[i];
      this.moves.push({
        name: Moves[value].name,
        type: Moves[value].type,
        usage
      });
      totalUsage += usage;
      i++;
    }
    if (totalUsage !== 1) {
      this.moves.push({
        name: 'Other',
        type: '',
        usage: 4 - totalUsage
      })
    }
  }

  private getNatures(): void {
    let totalUsage = 0, i = 0;
    this.natures = [];
    while (i < 8 && i < this.pokemonUsageInfo.natures.length) {
      let {value, usage} = this.pokemonUsageInfo.natures[i];
      this.natures.push({
        name: value,
        usage
      });
      totalUsage += usage;
      i++;
    }
    if (totalUsage !== 1) {
      this.natures.push({
        name: "Other",
        usage: 1 - totalUsage
      })
    }
  }

  public changeSelectedPokemon(index: number): void {
    this.isLoading = true;
    this.selectedIndex = index;
    this.selectedPokemonName = this.usageData[index].name;
    this.selectedPokemon = Object.keys(Pokedex).find(key => Pokedex[key].name === this.selectedPokemonName) || '';
    this.selectedSpeciesData = Pokedex[this.selectedPokemon];
    if (!this.selectedSpeciesData) return;
    this.getPokemonUsageData();
  }

  public changeEloRange(elo: any) {
    this.selectedElo = elo;
    this.getUsageStats();
  }


}

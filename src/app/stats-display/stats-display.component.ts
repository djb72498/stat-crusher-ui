import { Component, OnInit, Input } from '@angular/core';
import { StatStatistics } from '../../models/stat-statistics';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css']
})
export class StatsDisplayComponent implements OnInit {

  @Input() name: string = "Stat";
  @Input() baseStat: number = 0;
  @Input() data?: StatStatistics;
  @Input() showIvNote: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

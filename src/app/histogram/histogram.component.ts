import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  @Input() data: any[] = [];

  showTooltip = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHover(i: boolean) {
    this.showTooltip = i;
  }

}

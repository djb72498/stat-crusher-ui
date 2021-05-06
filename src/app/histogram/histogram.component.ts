import { Component, Input, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  @Input() frequency: {value: number, usage: number}[] = [];
  @Input() cumulativeAscending: {value: number, usage: number}[] = [];
  @Input() cumulativeDescending: {value: number, usage: number}[] = [];

  mode = 0;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];
  barChartDataAsc: ChartDataSets[] = [];
  barChartDataDesc: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
    this.parseChartData();
  }

  parseChartData(): void {
    this.barChartLabels = this.frequency.map(a => '' + a.value);

    this.barChartData = [{
      data: this.frequency.map(a => +a.usage.toFixed(3)),
      label: 'Frequency',
      backgroundColor: "#911",
      hoverBackgroundColor: "#711"
    }]

    this.barChartDataAsc = [{
      data: this.cumulativeAscending.map(a => +a.usage.toFixed(3)),
      label: 'Cumulative Frequency',
      backgroundColor: "#191",
      hoverBackgroundColor: "#171"
    }]

    this.barChartDataDesc = [{
      data: this.cumulativeDescending.map(a => +a.usage.toFixed(3)),
      label: 'Descending Cumulative Frequency',
      backgroundColor: "#11f",
      hoverBackgroundColor: "#119"
    }]
  }
 
}

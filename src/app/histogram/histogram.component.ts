import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartTooltipItem, ChartType, ChartDataSets, ChartData } from 'chart.js'
import { chartOptions, ascChartOptions, descChartOptions } from './chart-options'

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  @Input() frequency: {value: number, usage: number}[] = [];
  @Input() cumulativeAscending: {value: number, usage: number}[] = [];
  @Input() cumulativeDescending: {value: number, usage: number}[] = [];
  @ViewChild('chartTooltip', {read: TemplateRef}) tooltipTemplate?: TemplateRef<any>;

  mode = 0;

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];
  barChartDataAsc: ChartDataSets[] = [];
  barChartDataDesc: ChartDataSets[] = [];

  barChartOptions: ChartOptions = chartOptions;
  barChartOptionsAsc: ChartOptions = ascChartOptions;
  barChartOptionsDesc: ChartOptions = descChartOptions;

  constructor(private viewContainer: ViewContainerRef) { }

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

  private setChartOptions(): void {
    const baseChartOptions: ChartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            callback: (value: number) => (value * 100).toFixed(0) + '%'
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage'
          }
        }]
      },
      tooltips: {
        bodyAlign: 'center',
        displayColors: false,
        titleFontColor: '#11f',
        callbacks: {
          label: (item: ChartTooltipItem) => {
            let value: number = +(item.value || 0);
            return (100 * value).toFixed(2) + '%';
          }
        }
      }
    };
  }

  readonly options: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          callback: (value: number) => (value * 100).toFixed(0) + '%'
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage'
        }
      }]
    },
    tooltips: {
      bodyAlign: 'center',
      displayColors: false,
      titleFontColor: '#11f',
      callbacks: {
        label: (item: ChartTooltipItem) => {
          let value: number = +(item.value || 0);
          return (100 * value).toFixed(2) + '%';
        }
      }
    }
  };

  readonly optionsAsc: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          callback: (value: number) => (value * 100).toFixed(0) + '%'
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage'
        }
      }]
    },
    tooltips: {
      bodyAlign: 'center',
      displayColors: false,
      titleFontColor: '#11f',
      callbacks: {
        label: (item: ChartTooltipItem) => {
          let value: number = +(item.value || 0);
          return (100 * value).toFixed(2) + '%';
        }
      }
    }
  };

  readonly optionsDesc: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          callback: (value: number) => (value * 100).toFixed(0) + '%'
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage'
        }
      }]
    },
    tooltips: {
      bodyAlign: 'center',
      displayColors: false,
      titleFontColor: '#11f',
      callbacks: {
        label: (item: ChartTooltipItem) => {
          let value: number = +(item.value || 0);
          return (100 * value).toFixed(2) + '%';
        }
      }
    }
  };

  
}

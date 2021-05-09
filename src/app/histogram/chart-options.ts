import { ChartOptions, ChartTooltipItem } from 'chart.js';


export const chartOptions: ChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                callback: (value: number) => (value * 100).toFixed(0) + '%'
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Stat Value"
            }
        }]
    },
    tooltips: {
        titleAlign: 'center',
        displayColors: false,
        titleFontColor: '#911',
        callbacks: {
            title: (item: ChartTooltipItem[]) => '= ' + item[0].label,
            label: (item: ChartTooltipItem) => {
                let value: number = +(item.value || 0);
                return (100 * value).toFixed(2) + '%';
            }
        }
    }
}

export const ascChartOptions: ChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                callback: (value: number) => (value * 100).toFixed(0) + '%'
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Stat Value"
            }
        }]
    },
    tooltips: {
        titleAlign: 'center',
        displayColors: false,
        titleFontColor: '#191',
        callbacks: {
            title: (item: ChartTooltipItem[]) => '\u2264 ' + item[0].label,
            label: (item: ChartTooltipItem) => {
                let value: number = +(item.value || 0);
                return (100 * value).toFixed(2) + '%';
            }
        }
    }
}

export const descChartOptions: ChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                callback: (value: number) => (value * 100).toFixed(0) + '%'
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Stat Value"
            }
        }]
    },
    tooltips: {
        titleAlign: 'center',
        displayColors: false,
        titleFontColor: '#11f',
        callbacks: {
            title: (item: ChartTooltipItem[]) => '\u2265 ' + item[0].label,
            label: (item: ChartTooltipItem) => {
                let value: number = +(item.value || 0);
                return (100 * value).toFixed(2) + '%';
            }
        }
    }
}




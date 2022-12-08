import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ChartOptions, ChartType } from "chart.js";


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent{

  innerWidth: any;
  getClass(){
    return this.innerWidth < 925 ? 'row-md' : 'row';
  }

  title = 'ng2-charts-demo';

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  //plot chart
  title1 = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'

    ],
    datasets: [
      {
        data: [ 95, 59, 80, 81, 56, 55, 40, 90, 45, 65, 100, 250 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  
  title2 = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  // ngOnInit(): void {
  // }

}

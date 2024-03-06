// chart.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { Chart, registerables } from 'chart.js/auto';
import { ChartService } from './services/chart.service';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    HeroComponent,
  ],
})
export class ChartsComponent implements OnInit {
  chartsHero: Hero;

  chartData: any;
  labelData: any[] = [];
  firstValueData: any[] = [];
  firstValueBgcolor: any[] = [];
  secondValueData: any[] = [];
  secondValueBgColor: any[] = [];

  constructor(
    private heroService: HeroService,
    private chartService: ChartService
  ) {
    // Inicializar para evitar errores de TypeScript
    this.chartsHero = this.heroService.getChartsHero();
  }

  ngOnInit(): void {
    this.chartService.getChartData().subscribe((result) => {
      this.chartData = result;
      if (this.chartData != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          this.labelData.push(this.chartData[i].month);
          this.firstValueData.push(this.chartData[i].firstValueData);
          this.firstValueBgcolor.push(this.chartData[i].firstValueBgcolor);
          this.secondValueData.push(this.chartData[i].secondValueData);
          this.secondValueBgColor.push(this.chartData[i].secondValueBgColor);
        }

        /* comprobación por si funciona.
        console.table(this.chartData);*/

        // BarChart
        this.renderChart(
          this.labelData,
          this.firstValueData,
          this.firstValueBgcolor,
          this.secondValueData,
          this.secondValueBgColor,
          'bar',
          'barChart'
        );

        // Configuración específica para el DoughnutChart
        this.renderDoughnutChart();

        // LineChart
        this.renderChart(
          this.labelData,
          this.firstValueData,
          this.firstValueBgcolor,
          this.secondValueData,
          this.secondValueBgColor,
          'line',
          'lineChart'
        );

        // Configuración específica para el RadarChart
        this.renderRadarChart();
        // Configuración específica para el PîeChart
        this.renderPieChart();
        // Configuración específica para el PolarChart
        this.renderPolarChart();
        // combo chart (mixed)
        this.renderMixedChart();
      }
    });
  }

  renderChart(
    labelData: any,
    firstValueData: any,
    firstValueBgcolor: any,
    secondValueData: any,
    secondValueBgColor: any,
    type: any,
    id: any
  ) {
    const barchart = new Chart(id, {
      type: type,
      data: {
        labels: labelData,
        datasets: [
          {
            label: 'First Dataset',
            data: firstValueData,
            backgroundColor: firstValueBgcolor,
            borderColor: 'rgb(66, 145, 245)',
            tension: 0.5,
          },
          {
            label: 'Second Dataset',
            data: secondValueData,
            backgroundColor: secondValueBgColor,
            borderColor: 'rgb(255, 167, 38)',
            tension: 0.5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // DoughnutChart
  renderDoughnutChart() {
    const doughnutData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    new Chart('doughnutChart', {
      type: 'doughnut',
      data: doughnutData,
    });
  }

  // RadarChart
  renderRadarChart() {
    const radarData = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    };

    new Chart('radarChart', {
      type: 'radar',
      data: radarData,
    });
  }

  // PolarChart
  renderPolarChart() {
    const polarData = {
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
          ],
        },
      ],
    };

    new Chart('polarChart', {
      type: 'polarArea',
      data: polarData,
    });
  }

  // PieChart
  renderPieChart() {
    const pieData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    new Chart('pieChart', {
      type: 'pie',
      data: pieData,
    });
  }

  renderMixedChart() {
    const mixedChart = new Chart('mixedChart', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Bar Dataset',
            data: [25, 50, 40, 20, 85, 25, 90],
            // this dataset is drawn below
            backgroundColor: 'rgb(255, 167, 38)',
            order: 3,
          },
          {
            label: 'Bar Dataset',
            data: [65, 60, 80, 82, 55, 55, 40],
            // this dataset is drawn below
            backgroundColor: 'rgb(112, 192, 115)',
            order: 2,
          },
          {
            label: 'Line Dataset',
            data: [10, 20, 10, 50, 60, 80, 20],
            type: 'line',
            borderColor: 'rgb(66, 165, 245)',
            // this dataset is drawn on top
            tension: 0.5,
            order: 1,
          },
        ],
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

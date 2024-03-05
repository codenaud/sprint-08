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
import { ChartData } from './interfaces/chart';

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
  realData: any[] = [];
  colorData: any[] = [];

  constructor(
    private heroService: HeroService,
    private chartService: ChartService
  ) {
    // Inicializar para evitar errores de TypeScript
    this.chartsHero = this.heroService.getChartsHero();
  }

  ngOnInit(): void {
    // Ahora crudHero se obtiene del servicio
    // servicio de chart api json
    this.chartService.getChartData().subscribe((charts: ChartData[]) => {
      if (charts && charts.length > 0) {
        const chartData = charts[0]; // Directamente accede al primer elemento del arreglo
        this.renderChart(chartData);
      } else {
        console.error('No chart data available');
      }
    });
  }

  renderChart(chartConfig: ChartData) {
    if (!chartConfig.datasets) {
      console.error('Datasets is undefined', chartConfig);
      return;
    }

    new Chart('piechart', {
      type: 'bar',
      data: {
        labels: chartConfig.labels,
        datasets: chartConfig.datasets.map((dataset) => ({
          label: dataset.label,
          data: dataset.data,
          backgroundColor: dataset.backgroundColor,
          borderWidth: 1,
        })),
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

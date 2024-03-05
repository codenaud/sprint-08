import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { Chart, registerables } from 'chart.js/auto';

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

  constructor(private heroService: HeroService) {
    // Inicializar para evitar errores de TypeScript
    this.chartsHero = this.heroService.getChartsHero();
  }

  ngOnInit(): void {
    // Ahora crudHero se obtiene del servicio
    this.RenderChart();
  }

  RenderChart() {
    const ctx = document.getElementById('myChart');

    new Chart('piechart', {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: '# My First dataset',
            data: [65, 60, 80, 82, 55, 55, 40],
            borderWidth: 1,
            backgroundColor: ['rgb(66, 145, 245)'],
          },
          {
            label: '# My Second dataset',
            data: [25, 50, 40, 20, 85, 25, 90],
            borderWidth: 1,
            backgroundColor: ['rgb(255, 167, 38)'],
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
}

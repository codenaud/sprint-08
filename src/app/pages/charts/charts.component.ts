import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

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
  }
}

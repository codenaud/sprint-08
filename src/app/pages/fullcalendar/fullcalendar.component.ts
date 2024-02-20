import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-fullcalendar',
  standalone: true,
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    HeroComponent,
  ],
})
export class FullcalendarComponent implements OnInit {
  fullCalendarHero: Hero;

  constructor(private heroService: HeroService) {
    // Inicializar para evitar errores de TypeScript
    this.fullCalendarHero = this.heroService.getFullCalendarHero();
  }

  ngOnInit(): void {
    // Ahora crudHero se obtiene del servicio
  }
}

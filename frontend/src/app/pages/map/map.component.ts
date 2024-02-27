import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    HeroComponent,
    MapScreenComponent,
  ],
})
export class MapComponent implements OnInit {
  mapBoxHero: Hero;

  constructor(private heroService: HeroService) {
    // Inicializar para evitar errores de TypeScript
    this.mapBoxHero = this.heroService.getMapBoxHero();
  }

  ngOnInit(): void {
    // Ahora crudHero se obtiene del servicio
  }
}

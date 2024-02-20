import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
  crudHero: Hero;

  constructor(private heroService: HeroService) {
    // Inicializar para evitar errores de TypeScript
    this.crudHero = this.heroService.getCrudHero();
  }

  ngOnInit(): void {
    // Ahora crudHero se obtiene del servicio
  }
}

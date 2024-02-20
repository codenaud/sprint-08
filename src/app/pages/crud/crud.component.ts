import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    UserListComponent,
  ],
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

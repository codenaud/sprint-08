import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero; // Utiliza la interfaz Hero para tipar la propiedad hero

  constructor() {
    // Inicializa la propiedad hero para evitar errores de TypeScript
    this.hero = {
      id: -1,
      src: '',
      title: '',
      subtitle: '',
    };
  }

  ngOnInit(): void {}
}

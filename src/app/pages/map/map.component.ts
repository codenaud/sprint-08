import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {}

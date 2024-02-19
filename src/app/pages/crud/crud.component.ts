import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/components/header/nav/nav.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NavComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {}

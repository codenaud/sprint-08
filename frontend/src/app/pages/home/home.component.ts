import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, SliderComponent],
})
export class HomeComponent {}

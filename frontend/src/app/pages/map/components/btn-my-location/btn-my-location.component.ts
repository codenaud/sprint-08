import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  standalone: true,
  imports: [],
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.scss',
})
export class BtnMyLocationComponent {
  gotoMyLocation() {
    console.log('Ir a mi ubicación');
  }
}

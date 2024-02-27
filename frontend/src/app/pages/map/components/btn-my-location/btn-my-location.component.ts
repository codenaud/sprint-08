import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  standalone: true,
  imports: [],
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.scss',
})
export class BtnMyLocationComponent {
  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
  ) {}

  gotoMyLocation() {
    if (!this.placesServices.isUserLocationReady)
      throw Error('No hay ubicación de usuario');
    if (!this.mapService.isMapReady) throw Error('No hay mapa disponible');
    this.mapService.flyTo(this.placesServices.useLocation!);
  }
}

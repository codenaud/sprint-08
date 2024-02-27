/* map.view.component.ts */
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Map } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation)
      throw Error('No hay placesService.userLocation');

    mapboxgl.accessToken = environment.mapboxToken;

    const map = new Map({
      container: this.mapDivElement?.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }
}

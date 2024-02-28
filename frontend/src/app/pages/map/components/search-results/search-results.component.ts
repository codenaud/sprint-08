import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  public selectedId: string = '';
  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }
  get places(): Feature[] {
    return this.placesService.places;
  }
  flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }
}

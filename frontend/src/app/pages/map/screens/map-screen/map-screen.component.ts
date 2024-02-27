// map-screen.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PlacesService } from '../../services/places.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MapViewComponent } from '../../components/map-view/map-view.component';
import { AngularLogoComponent } from '../../components/angular-logo/angular-logo.component';
import { BtnMyLocationComponent } from '../../components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-map-screen',
  standalone: true,
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoadingComponent,
    MapViewComponent,
    AngularLogoComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
  ],
})
export class MapScreenComponent {
  constructor(private placesService: PlacesService) {}

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}

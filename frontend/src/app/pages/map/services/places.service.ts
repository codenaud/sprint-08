import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public useLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }
  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización ');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    this.http
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=es&proximity=2.192721507759387%2C41.40245852556819&language=es&access_token=pk.eyJ1IjoiY29kZW5hdWQiLCJhIjoiY2x0NGE4aWNtMDEzMjJpbnphMmZnZjdvYSJ9.nHe-zUJKN6TR1ivvvm6VWQ`
      )
      .subscribe(console.log);
  }
}

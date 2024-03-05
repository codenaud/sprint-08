import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../interfaces/chart'; // Ajusta la ruta según corresponda

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>('http://localhost:4000/charts');
  }
}

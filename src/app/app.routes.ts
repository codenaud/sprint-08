import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { FullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ChartsComponent } from './pages/charts/charts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'map', component: MapComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'fullcalendar', component: FullcalendarComponent },
  // { path: '**', component: PageNotFoundComponent },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { FullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: UserComponent },
  { path: 'map', component: MapComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'fullcalendar', component: FullcalendarComponent },
  // { path: '**', component: PageNotFoundComponent },
];

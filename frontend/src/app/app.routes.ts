import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { FullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

export const routes: Routes = [
  // Links => NAV
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'map', component: MapComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'fullcalendar', component: FullcalendarComponent },

  // Links => USER
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserAddComponent },

  // Links => Error 404
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

// hero.service.ts
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Definir datos de Hero (cabeceras)
  crudHero: Hero = {
    id: 0,
    src: '../../assets/img/crud.jpg',
    title: 'Crud',
    subtitle: 'Create a CRUD to consume data from the API',
    link: '/crud',
  };

  // Otros héroes pueden ser definidos aquí

  mapBoxHero: Hero = {
    id: 1,
    src: '../../assets/img/mapbox.jpg',
    title: 'MapBox',
    subtitle: 'Stores a list of locations with lat. and long.',
    link: '/map',
  };
  fullCalendarHero: Hero = {
    id: 2,
    src: '../../assets/img/fullcalendar.jpg',
    title: 'Full Calendar',
    subtitle: 'Displays a calendar. Add and delete events.',
    link: '/fullcalendar',
  };
  chartsHero: Hero = {
    id: 3,
    src: '../../assets/img/chartjs.jpg',
    title: 'Charts JS',
    subtitle: 'Shows 2 types of graphs.',
    link: '/charts',
  };

  constructor() {}

  // Métodos para obtener los datos de héroes
  getCrudHero(): Hero {
    return this.crudHero;
  }
  getMapBoxHero(): Hero {
    return this.mapBoxHero;
  }

  getFullCalendarHero(): Hero {
    return this.fullCalendarHero;
  }

  getChartsHero(): Hero {
    return this.chartsHero;
  }
}

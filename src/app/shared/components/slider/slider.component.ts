import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterOutlet, RouterLink],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'], // Corregido aquí
})
export class SliderComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
    links: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/img/crud.jpg',
      title: 'Crud',
      subtitle:
        'Create a CRUD of the theme that you want to consume data from the API',
      link: '/crud',
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/img/mapbox.jpg',
      title: 'MapBox',
      subtitle:
        'Stores a list of locations with latitude and longitude. You can use MapBox.',
      link: '/map',
    };
    this.slides[2] = {
      id: 2,
      src: '../../assets/img/fullcalendar.jpg',
      title: 'Full Calendar',
      subtitle: 'Displays a calendar where they can add and delete an event.',
      link: '/fullcalendar',
    };
    this.slides[3] = {
      id: 3,
      src: '../../assets/img/chartjs.jpg',
      title: 'Charts JS',
      subtitle:
        'Shows 2 types of graphs, for example: a bar graph and a linear graph.',
      link: '/graphics',
    };
  }
}

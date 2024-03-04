//fullcalendar.components.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fullcalendar',
  standalone: true,
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    HeroComponent,
    FullCalendarModule,
    FormsModule,
  ],
})
export class FullcalendarComponent implements OnInit {
  fullCalendarHero: Hero;

  // En tu componente FullcalendarComponent
  selectedEvent: any = null;
  eventTitle: string = '';
  eventDescription: string = '';
  eventColor: string = '';
  eventStart: Date | null = null;
  eventEnd: Date | null = null;
  calendarApi: any;

  @ViewChild('eventEditModal', { static: true })
  eventEditModal!: ElementRef<HTMLDivElement>;
  // Variables para almacenar los datos del evento seleccionado
  currentEvent: any = null;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this),
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDidMount: (info) => {
      if (!this.calendarApi) {
        this.calendarApi = info.view.calendar;
      }
    },
    events: [
      {
        title: 'Event 1',
        date: '2024-04-01',
        description: 'This is a sample description',
      },
      {
        title: 'Event 2',
        date: '2024-04-02',
        description: 'Another sample description',
      },
    ],
    eventContent: (arg) => {
      let italicEl = document.createElement('i');
      italicEl.innerText = arg.event.title;

      let arrayOfDomNodes = [italicEl];
      // Accede a la propiedad 'description' usando la notación de corchetes
      let description = arg.event.extendedProps['description'];
      if (description) {
        let descriptionEl = document.createElement('div');
        descriptionEl.innerText = description;
        arrayOfDomNodes.push(descriptionEl);
      }

      return { domNodes: arrayOfDomNodes };
    },
  };

  constructor(private heroService: HeroService) {
    // Inicializar para evitar errores de TypeScript
    this.fullCalendarHero = this.heroService.getFullCalendarHero();
  }

  ngOnInit(): void {}

  handleDateClick(arg: any) {
    alert('Date click: ' + arg.dateStr);
  }

  handleDateSelect(selectInfo: any) {
    const title = prompt('Please enter a new title for your event:');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        description: 'Add a description here', // Placeholder, reemplace o modifique según sea necesario
      });
    }
  }

  handleEventClick(clickInfo: any) {
    this.openModalWithEventData(clickInfo.event);
  }
  openModalWithEventData(event: any = null) {
    if (event) {
      // Editar un evento existente
      this.selectedEvent = event;
      this.eventTitle = event.title;
      this.eventDescription = event.extendedProps.description || '';
      this.eventColor = event.backgroundColor;
      this.eventStart = event.start;
      this.eventEnd = event.end;
    } else {
      // Nuevo evento
      this.selectedEvent = null;
      this.eventTitle = '';
      this.eventDescription = '';
      this.eventColor = '#3788D8'; // Valor predeterminado o dejar vacío
      this.eventStart = null;
      this.eventEnd = null;
    }

    // Mostrar el modal
    this.eventEditModal.nativeElement.style.display = 'block';
    this.eventEditModal.nativeElement.classList.add('show');
  }

  saveEvent() {
    if (this.selectedEvent) {
      // Actualizar evento existente
      this.selectedEvent.setProp('title', this.eventTitle);
      this.selectedEvent.setProp('backgroundColor', this.eventColor);
      this.selectedEvent.setProp('borderColor', this.eventColor);
      this.selectedEvent.setExtendedProp('description', this.eventDescription);
    } else {
      // Añadir nuevo evento
      this.calendarApi.addEvent({
        title: this.eventTitle,
        start: this.eventStart,
        end: this.eventEnd,
        backgroundColor: this.eventColor,
        borderColor: this.eventColor,
        extendedProps: {
          description: this.eventDescription,
        },
      });
    }

    // Ocultar el modal
    this.closeModal();
  }

  closeModal() {
    this.eventEditModal.nativeElement.style.display = 'none';
    this.eventEditModal.nativeElement.classList.remove('show');
  }
}

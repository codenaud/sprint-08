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
  eventStart: string | null = null;
  eventEnd: string | null = null;
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
        description: 'This is a sample description',
        backgroundColor: '#3788D8',
        borderColor: '#3788D8',
        start: '2024-03-24',
        end: '2024-03-25',
      },
      {
        title: 'Event 2',
        description: 'Another sample description',
        backgroundColor: '#D83B01',
        borderColor: '#D83B01',
        start: '2024-04-02',
        // Ajusta la fecha de finalización para incluir el día 4 en la visualización
        end: '2024-04-05',
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

  handleDateClick(arg: any) {}

  handleDateSelect(selectInfo: any) {
    this.eventStart = selectInfo.startStr; // Asegúrate de usar startStr y endStr que son formatos de cadena de fecha
    this.eventEnd = selectInfo.endStr;
    // Preparar el modal para un nuevo evento
    this.eventTitle = '';
    this.eventDescription = '';
    this.eventColor = ''; // Puedes establecer un color predeterminado si lo deseas
    // La siguiente línea es donde necesitas corregir la referencia a la función
    this.openModalWithEventData(); // Llama a openModalWithEventData sin parámetros para un nuevo evento
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
      // Convertir las fechas a formato de cadena YYYY-MM-DD
      this.eventStart = this.convertDateToInputFormat(event.start);
      this.eventEnd = this.convertDateToInputFormat(event.end);
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
  convertDateToInputFormat(date: Date | string): string {
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    } else {
      // Si la fecha ya es una cadena, asumir que está en el formato correcto
      // O puedes ajustar según sea necesario basado en cómo estás manejando las fechas
      return date;
    }
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

  deleteEvent() {
    if (this.selectedEvent) {
      this.selectedEvent.remove(); // Elimina el evento seleccionado
      this.selectedEvent = null; // Resetea la variable del evento seleccionado
      this.closeModal(); // Cierra el modal
    }
  }

  closeModal() {
    this.eventEditModal.nativeElement.style.display = 'none';
    this.eventEditModal.nativeElement.classList.remove('show');
  }
}

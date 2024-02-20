import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-add',
  standalone: true,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    HeroComponent,
    ReactiveFormsModule,
  ],
})
export class UserAddComponent implements OnInit {
  addUserHero: Hero;
  addUserForm: FormGroup;

  // validación formularios
  submitted = false;

  constructor(private heroService: HeroService, private fb: FormBuilder) {
    // Inicializar para evitar errores de TypeScript
    this.addUserHero = this.heroService.getAddUserHero();
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  addUser() {
    this.submitted = true; // Cambia el estado de submitted a true cuando el formulario se envía

    if (this.addUserForm.invalid) {
      return; // Si el formulario es inválido, no procedas más
    }

    console.log('Add User', this.addUserForm.value);
    // Aquí iría la lógica para procesar los datos del formulario, como enviarlos a un servidor
  }
}

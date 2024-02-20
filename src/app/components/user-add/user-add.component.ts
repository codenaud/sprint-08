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
    //* Validación del formulario
    this.submitted = true; // Cambia el estado de submitted a true cuando el formulario se envía

    if (this.addUserForm.invalid) {
      return; // Si el formulario es inválido, no procedas más
    }

    //? => Crear la constante para el Backend (extraemos los datos de la interfaz)
    const user: User = {
      // opcional
      name: this.addUserForm.value.name,
      lastName: this.addUserForm.value.lastName,
      email: this.addUserForm.value.email,
      phone: this.addUserForm.value.phone,
      location: this.addUserForm.value.location,
      hobby: this.addUserForm.value.hobby,
    };
    //? Validamos que estamos capturando los datos correctamente
    console.log(`formulario capturado de: ${{ user }}`); // => [object Object]
    console.log('Formulario capturado de con símbolo +:' + user); // => [object Object]
    console.log(`formulario capturado de con JSON: ${JSON.stringify(user)}`);
    console.log(user);

    //* Información del formulario
    console.log('Add User Form');

    //* todo el formulario
    console.log(this.addUserForm.value);

    //* formas de obtener valores de los campos del formulario
    console.log(this.addUserForm.value.name, this.addUserForm.value.lastName);
    console.log(
      this.addUserForm.get('name')?.value,
      this.addUserForm.get('lastName')?.value
    );
  }
}

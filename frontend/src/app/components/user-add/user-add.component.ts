import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';

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
    ProgressBarComponent,
  ],
})
export class UserAddComponent implements OnInit {
  addUserHero: Hero;
  addUserForm: FormGroup;
  loading: boolean = false;

  // validación formularios
  submitted = false;

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
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

    this.loading = true;
    this._userService.saveUser(user).subscribe(() => {
      console.log('Producto Agregado');
      this.loading = false;
      this.toastr.success(
        `El usuario ${user.name} fue registrado con éxito`,
        'Usuario registrado'
      );
      this.router.navigate(['/crud']);
    });
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

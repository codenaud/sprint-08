import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
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
import { getUser } from '../../../../../backend/src/controllers/user.controller';

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
  editUserHero: Hero; // Asegúrate de tener también el Hero para editar
  currentHero: Hero; // Este será el que pasemos al componente <app-hero>
  addUserForm: FormGroup;
  loading: boolean = false;
  id: number;
  operation: string = 'Add ';

  // validación formularios
  submitted = false;

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    // Inicializar para evitar errores de TypeScript
    this.addUserHero = this.heroService.getAddUserHero();
    this.editUserHero = this.heroService.getEditUserHero();
    this.currentHero = this.addUserHero; // Asignar un valor inicial
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // es EDIT
      this.operation = 'Edit ';
      this.currentHero = this.editUserHero;
      this.getUser(this.id); // Usar el Hero para editar
    } else {
      // es ADD
      this.currentHero = this.addUserHero; // Usar el Hero para agregar
    }
  }

  getUser(id: number) {
    this.loading = true;
    this._userService.getUser(id).subscribe((user: User) => {
      // Cambia users: User[] a user: User
      console.log(user); // Ver los datos recibidos
      this.loading = false;
      this.addUserForm.setValue({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        location: user.location,
        hobby: user.hobby,
      });
    });
  }

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

    if (this.id !== 0) {
      //es EDIT

      user.id = this.id;
      this._userService.updateUser(this.id, user).subscribe(() => {
        console.log('Producto Actualizado');
        this.toastr.info(
          `El usuario ${user.name} fue actualizado con éxito`,
          'Usuario actualizado'
        );
        this.loading = false;
        this.router.navigate(['/crud']);
      });
    } else {
      this._userService.saveUser(user).subscribe(() => {
        console.log('Producto Agregado');
        this.toastr.success(
          `El usuario ${user.name} fue registrado con éxito`,
          'Usuario registrado'
        );
        this.loading = false;
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
}

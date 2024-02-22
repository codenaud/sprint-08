// user-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { deleteUser } from '../../../../../backend/src/controllers/user.controller';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  imports: [CommonModule, RouterOutlet, RouterLink, ProgressBarComponent],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  loading: boolean = false;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getListUsers();
  }

  trackById(index: number, user: User) {
    return user.id;
  }

  getListUsers() {
    this.loading = true;
    this._userService.getListUsers().subscribe((users: User[]) => {
      console.log(users); // Ver los datos recibidos
      console.log(Array.isArray(users)); // Debería ser true
      this.userList = users;
      this.loading = false;
    });
  }
  deleteUser(id: number) {
    this.loading = true;
    this._userService.deleteUser(id).subscribe(() => {
      this.getListUsers();
    });
  }
}

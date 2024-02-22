// user-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getListUsers();
  }

  trackById(index: number, user: User) {
    return user.id;
  }

  getListUsers() {
    this._userService.getListUsers().subscribe((users: User[]) => {
      console.log(users); // Ver los datos recibidos
      console.log(Array.isArray(users)); // Debería ser true
      this.userList = users;
    });
  }
}

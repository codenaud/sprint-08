import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userList: User[] = [
    {
      name: 'Mark',
      lastName: 'Otto',
      email: 'mark.otto@demo.com',
      phone: 609123123,
      location: 'Portland, Oregon',
      hobby: 'Photography',
    },
    {
      name: 'Jacob',
      lastName: 'Thomson',
      email: 'jacob.thomson@demo.com',
      phone: 609234234,
      location: 'Chicago , Illinois',
      hobby: 'Music',
    },
    {
      name: 'Larry',
      lastName: 'Bird',
      email: 'larry.bird@demo.com',
      phone: 609345345,
      location: 'Los Ángeles, California',
      hobby: 'Travel',
    },
  ];
  constructor() {}

  // ID Dinámico
  ngOnInit(): void {
    this.userList = this.userList.map((user, index) => ({
      ...user,
      id: index + 1, // Asignar un ID dinámico basado en el índice
    }));
  }
}

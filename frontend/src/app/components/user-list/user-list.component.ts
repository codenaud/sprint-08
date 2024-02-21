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
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this._userService.getListUsers().subscribe((data) => {
      console.log(data);
    });
  }
}

import { User } from './../classes/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user);
  }

  onUpdateUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

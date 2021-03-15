import { User } from './classes/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  title = 'user-management-system';
  userSelected: User = new User();

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }

  onNewUser() {
    this.showForm = true;
    this.userSelected = new User();
  }

}

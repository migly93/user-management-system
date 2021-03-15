import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private backupUser!: User;
  private __user!: User;

  @Input() set user(user: User){
    this.__user = user;
    this.backupUser = Object.assign({}, user);
  };

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onUpdateUser() {
    if(this.user.id)
      this.userService.updateUser(this.user);
    else
      this.userService.insertUser(this.user);
  }

  onResetForm(form: any) {
    if(this.user.id === 0)
      this.user = new User();
    else
      this.user = this.backupUser;
  }
}

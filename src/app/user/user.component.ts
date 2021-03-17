import { User } from './../classes/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt, faTrashAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter();
  @Output() userUpdated = new EventEmitter();

  faPencil = faPencilAlt;
  faTrash = faTrashAlt;
  faInfo = faInfo;

  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onDeleteUser() {
    this.userDeleted.emit(this.user);
  }

  onUpdateUser() {
    this.route.navigate(["users", this.user.id, "edit"]);
    this.userUpdated.emit(this.user);
  }

  onShowUserDetail() {
    this.route.navigate(["users", this.user.id]);
    this.userUpdated.emit(this.user);
  }

}

import { User } from './../classes/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteUser() {
    this.userDeleted.emit(this.user);
  }

  onUpdateUser() {
    this.userUpdated.emit(this.user);
  }

}

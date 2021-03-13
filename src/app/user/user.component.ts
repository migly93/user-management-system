import { User } from './../interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteUser() {
    this.userDeleted.emit(this.user);
  }

}

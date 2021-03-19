import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  newUser() {
    this.onNewUser.emit();
  }

  onSignIn() {
    this.auth.login("null", "null");
    this.router.navigate(["login"]);
    this.isUserLoggedIn = this.auth.isUserLoggedIn();

  }

  onSignOut(e: any) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(["login"]);
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  isUserLoggedIn = false;
  username!: string;

  constructor(private auth: AuthService, private router: Router) {
    auth.userSignedIn.subscribe( (user: User) => {
      this.username = user.firstName;
      this.isUserLoggedIn = true;
    });

    auth.userSignedOut.subscribe( (user: User) => {
      this.username = "";
      this.isUserLoggedIn = false;
    });

    auth.userSignedUp.subscribe( (user: User) => {
      this.username = user.firstName;
      this.isUserLoggedIn = true;
    });
  }

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

  onSignUp(e: any) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(["signup"]);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = false;

  constructor() { }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem("token");
    return this.isUserLogged;
  }

  login(email: string, password: string) {
    localStorage.setItem("token", email);
    this.isUserLogged = true;
    return this.isUserLogged;
  }

  signUp(username: string, email: string, password: string) {

  }

  logout() {
    localStorage.removeItem("token");
    this.isUserLogged = false;
  }
}

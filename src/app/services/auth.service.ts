import { User } from './../classes/user';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Jwt {
  message: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = false;
  @Output() userSignedIn = new EventEmitter<User>();
  @Output() userSignedUp = new EventEmitter<User>();
  @Output() userSignedOut = new EventEmitter();
  private apiAuthUrl = "http://localhost:8080/api/user/login";

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem("token");
    return this.isUserLogged;
  }

  doLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.apiAuthUrl,
      {
        email: email,
        password: password
      });
    }

    login(email: string, password: string) {
      this.doLogin(email, password).subscribe( (data: Jwt) => {
        localStorage.setItem("token", data.token);
        this.isUserLogged = true;
        let user = new User();
        user.firstName = "test";
        user.email = email;
        this.userSignedIn.emit(user);
      }, (error: HttpHeaderResponse) => {
        alert(error.statusText)
      });
      return this.isUserLogged;
    }

    signUp(username: string, email: string, password: string) {
      localStorage.setItem("token", email);
      let user = new User();
      user.firstName = "test";
      user.email = email;
      this.userSignedUp.emit(user);
      return true;
    }

    logout() {
      localStorage.removeItem("token");
      this.isUserLogged = false;
      this.userSignedOut.emit();
    }
  }

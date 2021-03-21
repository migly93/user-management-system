import { User } from './../classes/user';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    auth.userSignedIn.subscribe((user: User) => {
      this.router.navigate(["/"]);
    })
  }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    let result = this.auth.login(form.value.email, form.value.password);
    if(result)
      this.router.navigate(["/"]);
  }

}

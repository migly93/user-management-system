import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [
      RouteGuardService
    ]
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [
      RouteGuardService
    ]

  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [
      RouteGuardService
    ]
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
    canActivate: [
      RouteGuardService
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  }
  ,
  {
    path: 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuardService]
})
export class AppRoutingModule { }

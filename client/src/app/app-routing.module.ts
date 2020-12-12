import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './base/auth-base/auth.guard';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {UsersComponent} from './containers/users/users.component';
import {SignupComponent} from './containers/signup/signup.component';
import {LoginComponent} from './containers/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

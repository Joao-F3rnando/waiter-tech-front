import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRestaurantComponent } from './components/login-restaurant/login-restaurant.component';
import { SignupRestaurantComponent } from './components/signup-restaurant/signup-restaurant.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login-restaurant', component: LoginRestaurantComponent },
  { path: 'signup-restaurant', component: SignupRestaurantComponent },
  { path: 'forget-password', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

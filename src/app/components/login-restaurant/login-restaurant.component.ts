import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent {
  constructor(private router: Router) { }

  signUpRoute() {
    this.router.navigate(['/signup-restaurant'])
  }

  forgetRoute() {
    this.router.navigate(['/forget-password'])
  }
}

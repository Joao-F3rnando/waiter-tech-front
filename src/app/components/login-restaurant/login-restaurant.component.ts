import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

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

  login(email: string, password: string)
  {
    console.log(email)
    console.log(password)

    const user = 
    {
      "email": email,
      "password": password
    }

    $.get("http://localhost:3000/tudo",
    user,
    function (msg)
    {
      console.log(msg)
    })
  }
}

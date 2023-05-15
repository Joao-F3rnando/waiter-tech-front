import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

const route = "http://localhost:3000"

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

  userLogin = {
    email: '',
    password: ''
  }

  login(form: NgForm) {
    const user =
    {
      "email": this.userLogin.email,
      "password": this.userLogin.password
    }

    $.post(`${route}/login`,
      user,
      (msg) => {
        if (msg.status === true) {
          alert(msg.message)
          localStorage.setItem('ID', msg.id)
          this.router.navigate(['/home-restaurant'])
        }
        else {
          alert(msg)
        }
      })
  }
}

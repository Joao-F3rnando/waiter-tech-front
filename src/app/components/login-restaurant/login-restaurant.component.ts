import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { route } from 'src/app/app.component';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})

export class LoginRestaurantComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }

  userID: any
  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID != null) {
      this.router.navigate(['/home-restaurant'])

    }
  }

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

  login() {
    const user =
    {
      "email": this.userLogin.email,
      "password": this.userLogin.password
    }

    this.http.post(`${route}/login`, { user: user }).subscribe((msg: any) => {
      if (msg.status === true) {
        localStorage.setItem('id', msg.id)
        this.router.navigate(['/home-restaurant'])
      }
      else {
        alert(msg)
      }
    })
  }
}

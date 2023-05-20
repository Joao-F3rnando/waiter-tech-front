import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { data } from '../externalData';

const route = "http://localhost:3000"

@Component({
  selector: 'app-home-restaurante',
  templateUrl: './home-restaurante.component.html',
  styleUrls: ['./home-restaurante.component.css']
})
export class HomeRestauranteComponent {

  userID: any
  restaurantName: any
  constructor(private router: Router) { }

  async ngOnInit() {
    if (data.id === '') {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.userID = data.id
      await $.post(`${route}/getRestaurantName`,
        { id: this.userID },
        (msg) => {
          this.restaurantName = msg.restaurant_name
        })
    }
  }

  optionRoute() {
    this.router.navigate(['/option'])
  }
}

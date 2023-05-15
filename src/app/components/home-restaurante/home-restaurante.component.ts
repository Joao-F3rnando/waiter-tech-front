import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'

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

  ngOnInit() {
    if (localStorage.getItem('ID') === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.userID = localStorage.getItem('ID')
      $.post(`${route}/getRestaurantName`,
        { id: this.userID },
        (msg) => {
          console.log(msg.restaurant_name)
          this.restaurantName = msg.restaurant_name
        })
    }
  }



  optionRoute() {
    console.log('teste')
  }
}

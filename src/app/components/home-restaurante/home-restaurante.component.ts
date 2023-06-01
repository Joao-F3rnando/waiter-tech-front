import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const route = "http://localhost:3000"

@Component({
  selector: 'app-home-restaurante',
  templateUrl: './home-restaurante.component.html',
  styleUrls: ['./home-restaurante.component.css']
})
export class HomeRestauranteComponent implements OnInit {

  userID: any
  restaurantName: any
  constructor(private router: Router, private http: HttpClient) { }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.http.post(`${route}/getRestaurantName`, { id: this.userID }).subscribe((msg: any) => {
        this.restaurantName = msg.restaurant_name
      })
    }
  }

  optionRoute() {
    this.router.navigate(['/option'])
  }

  controlRoute() {
    this.router.navigate(['/order-control'])
  }

  menuRoute() {
    this.router.navigate(['/dishes'])
  }

}

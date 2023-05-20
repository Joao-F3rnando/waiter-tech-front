import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { data } from '../externalData';

const route = "http://localhost:3000"

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {

  userID: any
  restaurantData: {
    photo: string;
    restaurantName: string;
    name: string;
    email: string;
    contact: string;
    address: string;
    time: string;
  } = {
      photo: '',
      restaurantName: '',
      name: '',
      email: '',
      contact: '',
      address: '',
      time: ''
    }

  constructor(private router: Router) { }

  async ngOnInit() {
    if (data.id == '') {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.userID = data.id
      await $.post(`${route}/getRestaurantData`,
        { id: this.userID },
        (msg) => {
          console.log(msg)
          this.restaurantData.restaurantName = msg.restaurant_name
          this.restaurantData.name = msg.restaurant_name
          this.restaurantData.email = msg.email
          this.restaurantData.contact = msg.contact
          this.restaurantData.address = msg.address
          this.restaurantData.time = msg.time
        })
    }
    console.log("AAAAA")
    console.log(this.restaurantData)
  }
}

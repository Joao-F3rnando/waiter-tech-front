import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery'

const route = "http://localhost:3000"

@Component({
  selector: 'app-option-edit',
  templateUrl: './option-edit.component.html',
  styleUrls: ['./option-edit.component.css']
})
export class OptionEditComponent {

  userID: any
  nameRestaurant: any
  restaurantData: {
    id: string
    photo: string;
    restaurantName: string;
    email: string;
    contact: string;
    address: string;
    time: string;
  } = {
      id: localStorage.getItem('id') || '',
      photo: '-',
      restaurantName: '',
      email: '',
      contact: '',
      address: '',
      time: ''
    }

  constructor(private router: Router) { }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      await $.post(`${route}/getRestaurantData`,
        { id: this.userID },
        (msg) => {
          this.nameRestaurant = msg.restaurant_name
        })
    }
  }

  goBack() {
    this.router.navigate(['option'])
  }

  async updateData(form: NgForm) {
    const self: any = this
    $.post(`${route}/updateData`,
      self.restaurantData,
      (msg) => {
        if (typeof msg === 'object') {
          alert("Não foi possível fazer as alterações. Verifique os campos, por favor")
        }
        else {
          alert(msg)
          self.router.navigate(['option'])
        }
      })
  }
}

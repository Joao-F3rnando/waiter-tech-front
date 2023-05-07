import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

const route = "http://localhost:3000"

@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.css']
})
export class SignupRestaurantComponent {
  constructor(private router: Router) { }

  userData = {
    restaurantName: '',
    email: '',
    cpf_cnpj: '',
    password: '',
    address: '-',
    contact: '-'
  }

  signUp(form: NgForm) {
    const self: any = this;
    $.post(`${route}/createAccount`,
      self.userData,
      function (msg) {
        if (msg.status === true) {
          alert(msg.response)
          self.router.navigate(['/login-restaurant'])
        }
        else {
          if (msg === 'cpf_cnpj') {
            alert('CPF/CNPJ já foi cadastrado no sistema. Por favor, use outro!')
          }
          else if (msg === 'email') {
            alert('Email já foi cadastrado no sistema. Por favor, use outro!')
          }
        }
      })
  }
}

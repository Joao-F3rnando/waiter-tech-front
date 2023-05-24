import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'

const route = "http://localhost:3000"

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent {
  userID: any
  orders: {
    board: number;
    ID: number;
    dishes: {
      dish: string;
      obs: string;
      quantity: number;
    }[];
  }[] = []

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['home-restaurant'])
  }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }

    else {
      await $.post(`${route}/getItensData`,
        { id: this.userID },
        (msg) => {
          for (let i = 0; i < msg.length; i++) {
            console.log(msg[i])
            this.orders.push(msg[i])
          }
        }
      )
    }
  }

  concludeItem(id: any) {
    console.log(id)
  }
}

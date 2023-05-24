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
  orders: [
    {
      table: number;
      idOfDishe: number;
      dishes: [
        {
          dishe: string;
          obs: string;
          quantity: number;
        }
      ];
    }
  ] = [
      {
        table: 0,
        idOfDishe: 0,
        dishes: [
          {
            dishe: '',
            obs: '',
            quantity: 0,
          }
        ]
      }
    ]
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['home-restaurant'])
  }

  async ngOnInit() {
    // this.orders =
    //   [
    //     {
    //       table: 1,
    //       idOfDishe: 1,
    //       dishes:
    //         [
    //           {
    //             dishe: 'Macarrão',
    //             quantity: 1
    //           },
    //           {
    //             dishe: 'Sopa',
    //             obs: 'Quente',
    //             quantity: 2
    //           },
    //           {
    //             dishe: 'Suco de Laranja',
    //             obs: 'Sem Gelo',
    //             quantity: 2
    //           }
    //         ]
    //     }
    //   ]

    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }

    else {
      await $.post(`${route}/getItensData`,
        { id: this.userID },
        (msg) => {
          console.log(msg)
        }
      )
    }
  }

  concludeItem(id: any) {
    console.log(this.orders)
    console.log(this.orders)
  }
}

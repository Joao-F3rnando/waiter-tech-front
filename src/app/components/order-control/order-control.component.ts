import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const route = "http://localhost:3000"

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent {
  userID: any
  orders: {
    board: number
    ID: number
    dishes: {
      dish: string
      obs: string
      quantity: number
    }[]
  }[] = []

  timer: any
  constructor(private router: Router, private http: HttpClient, private renderer: Renderer2) { }

  goBack() {
    this.router.navigate(['home-restaurant'])
  }

  async ngOnInit() {
    this.timer = setTimeout(() => {
      window.location.reload()
    }, 30000)

    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }

    else {
      this.http.post(`${route}/getItensData`, { id: this.userID }).subscribe((msg: any) => {
        for (let i = 0; i < msg.length; i++) {
          this.orders.push(msg[i])
        }
      })
    }
  }

  async concludeItem(id: any) {
    clearTimeout(this.timer)
    this.http.post(`${route}/removeDishControl`,
      {
        idRestaurant: localStorage.getItem('id'),
        board: id
      }).subscribe(() => {
        window.location.reload()
      })
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}

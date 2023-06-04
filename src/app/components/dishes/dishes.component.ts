import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

const route = "http://localhost:3000"

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  constructor(private router: Router, private http: HttpClient) { }

  userID: any
  dishs: {
    ID: number,
    dish_name: string,
    image: string
  }[] = []

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.http.post(`${route}/getDishData`, { id: this.userID }).subscribe((msg: any) => {
        for (let i = 0; i < msg.length; i++) {
          msg[i].image = `https://drive.google.com/uc?export=view&id=${msg[i].image}`
          this.dishs.push(msg[i])
        }
        console.log(this.dishs)
      })
    }
  }

  async deleteDish(id: any) {
    this.http.post(`${route}/deleteDish`, { id: id }).subscribe((msg: any) => {
      alert(msg)
      window.location.reload()
    })
  }
  goEdit() {
    this.router.navigate(['/add-item'])
  }

  goBack() {
    this.router.navigate(['/home-restaurant'])
  }
}

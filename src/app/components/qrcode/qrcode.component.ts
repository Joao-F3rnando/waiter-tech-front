import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { route } from 'src/app/app.component';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  constructor(private router: Router, private http: HttpClient) { }
  idRestaurant: any
  goRestaurantPage() {
    this.http.post(`${route}/getRestaurantId`, { idRestaurant: this.idRestaurant }).subscribe((msg: any) => {
      if (msg) {
        localStorage.setItem('idRestaurant', this.idRestaurant)
        this.router.navigate(['/home'])
      }
      else {
        alert("O código inserido não é de nenhum restaurante cadastrado!!!")
      }
    })
  }

  goBack() {
    this.router.navigate(['/login-client'])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const route = "http://localhost:3000"



@Component({
  selector: 'app-signup-restaurant',
  templateUrl: './signup-restaurant.component.html',
  styleUrls: ['./signup-restaurant.component.css']
})
export class SignupRestaurantComponent {
  constructor(private router: Router, private http: HttpClient) { }




  userData = {
    restaurantName: '',
    email: '',
    cpf_cnpj: '',
    password: ''
  }

  signUp() {
    this.http.post(`${route}/createAccount`, this.userData).subscribe((msg: any) => {
      if (msg.status === true) {
        alert(msg.response)
        this.router.navigate(['/login-restaurant'])
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

  senha!: string;

  verifyPassword(): void {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(passwordRegex.test(this.senha)) {
      console.log('A senha atende aos requisitos');
    } else {
      console.log('A senha não atende aos requisitos');
    }
  }

  goBack() {
    this.router.navigate(['/'])
  }

}

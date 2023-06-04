import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { HttpClient } from '@angular/common/http';

const route = "http://localhost:3000"

@Component({
  selector: 'app-option-edit',
  templateUrl: './option-edit.component.html',
  styleUrls: ['./option-edit.component.css']
})
export class OptionEditComponent {

  constructor(private router: Router, private http: HttpClient) { }

  restaurantPhoto = ''

  inputFile(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const files = inputElement.files

    if (files && files[0]) {
      const foto = files[0];

      const formData = new FormData();
      formData.append('image', foto);
      console.log(formData.get('image'))
      this.http.post(`${route}/savePhoto`, formData).subscribe(msg => console.log(msg));
    }
  }

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

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.restaurantPhoto = 'https://drive.google.com/uc?export=view&id=1DBGw5tyRTCz538sQEBG2gB19d7BnOTCZ'
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

  handlePhone = (event: Event) => {
    let input = event.target as HTMLInputElement;
    input.value = this.phoneMask(input.value);
  };

  phoneMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

}


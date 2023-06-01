import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const route = "http://localhost:3000"

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  userID: any
  inputText = 'Selecionar imagem'
  constructor(private router: Router, private http: HttpClient) { }


  isPrato = false
  isBebida = false
  isSobremesa = false

  itemData = {
    dishName: '',
    description: '',
    category: '',
    image: new FormData,
    value: 0,
    activated: false
  }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
  }

  inputFile(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const files = inputElement.files

    if (files && files[0]) {
      const foto = files[0];

      const formData = new FormData()
      formData.append('image', foto)
      this.inputText = foto.name
      this.itemData.image = formData
    }
  }

  addItem() {
    if (this.isPrato) {
      this.itemData.category = 'Prato'
    }
    if (this.isBebida) {
      this.itemData.category = 'Bebida'
    }
    if (this.isSobremesa) {
      this.itemData.category = 'Sobremesa'
    }
  }

  goBack() {
    this.router.navigate(['/dishes'])
  }

}

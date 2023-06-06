import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { route } from 'src/app/app.component';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }
  userID: any
  inputText = 'Selecionar imagem'

  itemData = {
    ID: '',
    idRestaurant: localStorage.getItem('id'),
    dish_name: '',
    description: '',
    price: 0,
    activated: false
  }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
    else {
      this.route.queryParams.subscribe(params => {
        this.http.post(`${route}/getDishData`, { id: params['id'] }).subscribe((msg: any) => {
          this.itemData.ID = msg.ID
          this.itemData.dish_name = msg.dish_name
          this.itemData.description = msg.description
          this.itemData.price = msg.price
          this.itemData.activated = msg.activated
        })
      })
    }
  }

  goBack() {
    this.router.navigate(['/dishes'])
  }

  editItem() {
    this.http.post(`${route}/updateItem`, { data: this.itemData }).subscribe((msg: any) => {
      if (msg) {
        alert("Prato alterado com sucesso!!!")
        window.location.reload()
      }
    })
  }
}

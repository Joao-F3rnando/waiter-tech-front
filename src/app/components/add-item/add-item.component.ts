import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  userID: any

  constructor(private router: Router) { }

  async ngOnInit() {
    this.userID = localStorage.getItem('id')
    if (this.userID === null) {
      alert('Você não está logado!!!')
      this.router.navigate(['login-restaurant'])
    }
  }
}

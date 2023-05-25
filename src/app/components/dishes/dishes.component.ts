import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  constructor(private router: Router) { }

  goEdit() {
    this.router.navigate(['/add-item'])
  }

  goBack(){
    this.router.navigate(['/home-restaurant'])
  }
}

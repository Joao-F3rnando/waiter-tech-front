import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.css']
})
export class ProcurarComponent {
  constructor(private router: Router) { }

  search: any
  restaurants:
    {
      restaurantName: string,
      restaurantImage: string,
      restaurantPhone: string,
      restaurantID: number
    }[] = []


  async teste() {
    const teste =
    {
      restaurantName: this.search,
      restaurantImage: 'https://drive.google.com/uc?export=view&id=1DBGw5tyRTCz538sQEBG2gB19d7BnOTCZ',
      restaurantPhone: '(11 98292-8496)',
      restaurantID: 12
    }

    this.restaurants.push(teste)
  }
  goLocal() {
    this.router.navigate(['/localizacao'])
  }

  goBack() {
    this.router.navigate(['/'])
  }
}

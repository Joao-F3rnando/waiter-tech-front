import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.css']
})
export class ProcurarComponent {
  constructor(private router: Router) { }

  goLocal(){
    this.router.navigate(['/localizacao'])
  }

  goBack(){
    this.router.navigate(['/'])
  }
}

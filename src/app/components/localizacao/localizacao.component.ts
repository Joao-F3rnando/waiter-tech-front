import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent {
  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['/procurar'])
  }

}

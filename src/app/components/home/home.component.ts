import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  teste() {
    alert("AAA")
  }

  constructor(private router: Router) { }

  goCart(){
    this.router.navigate(['/cart'])
  }

  goBack(){
    this.router.navigate(['/'])
  }

}

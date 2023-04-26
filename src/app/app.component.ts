import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waiter_Tech';
  valor = "";
  conectar()
  {
    $.get("http://localhost:3000/", function(resultado)
    {
      console.log(resultado)
    })
  }

  EnviarDados(valor: string)
  {
    const json = {"dado": valor}
    $.post("http://localhost:3000/dado",
    json,
    function(msg)
    {
      console.log(msg)
    })
  }

  AlterarCampo(valorCaixa: string)
  {
    this.valor=valorCaixa
  }

  Clicando()
  {
    $.get("http://localhost:3000/", (resultado) => {
      console.log(resultado)
      this.valor=resultado
    })
  }
}

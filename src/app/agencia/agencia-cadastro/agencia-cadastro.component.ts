import { Component, OnInit } from '@angular/core';
import { Agencia } from '../agencia-model';

@Component({
  selector: 'app-agencia-cadastro',
  templateUrl: './agencia-cadastro.component.html',
  styleUrls: ['./agencia-cadastro.component.css']
})
export class AgenciaCadastroComponent implements OnInit {

  agencia: Agencia = new Agencia();

  constructor() { }

  ngOnInit() {
  }


  // get editando() {
  //   return Boolean(this.categoria.id);
  // }

}

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-model';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  sexos = [
    {value: 'MASCULINO', viewValue: 'Masculino'},
    {value: 'FEMININO', viewValue: 'Feminino'},
  ];

  entidade = 'Cliente';
  cliente: Cliente = new Cliente();

  constructor(
    private router: Router,
    private rota: ActivatedRoute,
    private service: ClienteService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const idAgencia = this.rota.snapshot.params['id'];
    if (idAgencia) {
      this.buscarCliente(idAgencia);
    }
  }


  get editando() {
    return Boolean(this.cliente.id);
  }

  salvar() {
    this.service.adicionar(this.cliente).then(dados => {
      this.router.navigate(['/clientes']);
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

  buscarCliente(idCliente: number) {
    this.service.buscarPorCodigo(idCliente)
    .then(cliente => {
      this.cliente = cliente;
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

}

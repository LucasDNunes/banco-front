import { Component, OnInit } from '@angular/core';
import { Conta } from '../conta-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContaService } from '../conta.service';
import { MatSnackBar } from '@angular/material';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { AgenciaService } from 'src/app/agencia/agencia.service';

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.component.html',
  styleUrls: ['./conta-cadastro.component.css']
})
export class ContaCadastroComponent implements OnInit {

  entidade = 'Conta';
  conta: Conta = new Conta();
  clientes: [];
  agencias: [];

  constructor(
    private router: Router,
    private rota: ActivatedRoute,
    private service: ContaService,
    private clienteService: ClienteService,
    private agenciaService: AgenciaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const idAgencia = this.rota.snapshot.params['id'];
    if (idAgencia) {
      this.buscarCliente(idAgencia);
    }
    this.clienteService.listar().then(clientes => {
      this.clientes = clientes['content'].map(cliente => ({value: cliente, viewValue: cliente.nome}));
    });

    this.agenciaService.listar().then(agencias => {
      this.agencias = agencias['content'].map(agencia => ({value: agencia, viewValue: agencia.numero}) );
    });
  }

  get editando() {
    return Boolean(this.conta.id);
  }

  salvar() {
    this.service.adicionar(this.conta).then(dados => {
      this.router.navigate(['/contas']);
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

  buscarCliente(idCliente: number) {
    this.service.buscarPorCodigo(idCliente)
    .then(cliente => {
      this.conta = cliente;
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

  atualizar() {
    this.service.alterar(this.conta).then(dados => {
      this.router.navigate(['/contas']);
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Agencia } from '../agencia-model';
import { FormControl, Validators } from '@angular/forms';
import { AgenciaService } from '../agencia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-agencia-cadastro',
  templateUrl: './agencia-cadastro.component.html',
  styleUrls: ['./agencia-cadastro.component.css']
})
export class AgenciaCadastroComponent implements OnInit {

  entidade = 'Agência';
  agencia: Agencia = new Agencia();

  numero = new FormControl('', [Validators.required, Validators.min(100)]);

  constructor(
    private router: Router,
    private rota: ActivatedRoute,
    private service: AgenciaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const idAgencia = this.rota.snapshot.params['id'];
    if (idAgencia) {
      this.buscarAgencia(idAgencia);
    }
  }


  get editando() {
    return Boolean(this.agencia.id);
  }

  salvar() {
    this.service.adicionar(this.agencia).then(dados => {
      this.router.navigate(['/agencias']);
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

  buscarAgencia(idAgencia: number) {
    this.service.buscarPorCodigo(idAgencia)
    .then(agencia =>{
      this.agencia = agencia;
    }).catch(erro => {
      this.snackBar.open(erro.error.message, 'fechar', {
        duration: 10000
      });
    });
  }

}

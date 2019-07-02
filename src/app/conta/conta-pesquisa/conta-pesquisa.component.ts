import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ContaService } from '../conta.service';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';
import { Conta } from '../conta-model';
import { MatDialogSaqueDepositoComponent } from 'src/app/mat-dialog-saque-deposito/mat-dialog-saque-deposito.component';

@Component({
  selector: 'app-conta-pesquisa',
  templateUrl: './conta-pesquisa.component.html',
  styleUrls: [
    './conta-pesquisa.component.css',
    '../../app.component.css'
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContaPesquisaComponent implements OnInit {

  Entidade = 'Conta';
  columnsToDisplay: string[] = ['cliente', 'agencia', 'saldo'];
  expandedElement: Conta | null;
  dataSource;
  excluir = false;

  ngOnInit() {
    this.listar();
  }

  constructor(
    private service: ContaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  isCliente(column: string): boolean {
    if (column === 'cliente') {
      return true;
    }
    return false;
  }

  isAgencia(column: string): boolean {
    if (column === 'agencia') {
      return true;
    }
    return false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listar() {
    this.service.listar().then(dados => {
      const contas: Conta[] =  dados['content'];
      this.dataSource = new MatTableDataSource(contas);
      this.dataSource.filterPredicate = (data: Conta, filter: string) => {
        return data.cliente.nome == filter;
       };
    });
  }

  deletar(conta: Conta): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      data: 'Deseja realemnte excluir a conta do cliente: ' + conta.cliente.nome + ' ?'
    });

    dialogRef.afterClosed().subscribe(excluir => {
      if (excluir) {
        this.service.excluir(conta.id).then(() => {
          this.listar();
        }).catch(erro => {
          this.snackBar.open(erro.error.message, 'fechar', {
            duration: 10000
          });
        });
      }
    });
  }

  sacar(conta: Conta): void {
    const dialogRef = this.dialog.open(MatDialogSaqueDepositoComponent, {
      width: '300px',
      data: {descricao: 'saque', valor: null, acao: 'Sacar'}
    });

    dialogRef.afterClosed().subscribe(valor => {
      if (valor) {
        if (valor > conta.saldo) {
          this.snackBar.open('Valor acima do saldo em conta', 'fechar', {
            duration: 10000
          });
          return;
        } else if (valor < 0) {
          this.snackBar.open('insira um valor positivo', 'fechar', {
            duration: 10000
          });
          return;
        }
        this.service.sacar(conta, valor).then(() => {
          this.listar();
        }).catch(erro => {
          this.snackBar.open(erro.error.message, 'fechar', {
            duration: 10000
          });
        });
      }
    });
  }

  depositar(conta: Conta): void {
    const dialogRef = this.dialog.open(MatDialogSaqueDepositoComponent, {
      width: '300px',
      data: {descricao: 'deposito', valor: null, acao: 'Depositar'}
    });

    dialogRef.afterClosed().subscribe(valor => {
      if (valor) {
        if (valor < 0) {
          this.snackBar.open('insira um valor positivo', 'fechar', {
            duration: 10000
          });
          return;
        }
        this.service.depositar(conta, valor).then(() => {
          this.listar();
        }).catch(erro => {
          this.snackBar.open(erro.error.message, 'fechar', {
            duration: 10000
          });
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ContaService } from '../conta.service';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';
import { Conta } from '../conta-model';

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
  dataSource = null;
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
      this.dataSource = new MatTableDataSource(dados['content']);
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

}

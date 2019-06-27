import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ClienteService } from '../cliente.service';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Cliente } from '../cliente-model';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: [
    './cliente-pesquisa.component.css',
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
export class ClientePesquisaComponent implements OnInit {

  Entidade = 'Cliente';
  columnsToDisplay: string[] = ['nome', 'sexo', 'idade'];
  expandedElement: Cliente | null;
  dataSource = null;
  excluir = false;

  ngOnInit() {
    this.listar();
  }

  constructor(
    private service: ClienteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listar() {
    this.service.listar().then(dados => {
      this.dataSource = new MatTableDataSource(dados['content']);
    });
  }

  deletar(cliente: Cliente): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      data: 'Deseja realemnte excluir o cliente: ' + cliente.nome + ' ?'
    });

    dialogRef.afterClosed().subscribe(excluir => {
      if (excluir) {
        this.service.excluir(cliente.id).then(() => {
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AgenciaService } from '../agencia.service';
import { Agencia } from '../agencia-model';
import { MatConfirmDialogComponent } from 'src/app/mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-agencia-pesquisa',
  templateUrl: './agencia-pesquisa.component.html',
  styleUrls: [
    './agencia-pesquisa.component.css',
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
export class AgenciaPesquisaComponent implements OnInit {

  Entidade = 'Agencia';
  columnsToDisplay: string[] = ['numero', 'cidade', 'bairro'];
  expandedElement: Agencia | null;
  dataSource = null;
  excluir = false;

  ngOnInit() {
    this.listar();
  }

  constructor(
    private service: AgenciaService,
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

  deletar(agencia: Agencia): void {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      data: 'Deseja realemnte excluir a agencia numero:' + agencia.numero + ' ?'
    });

    dialogRef.afterClosed().subscribe(excluir => {
      if (excluir) {
        this.service.excluir(agencia.id).then(() => {
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

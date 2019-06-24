import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AgenciaCadastroComponent } from './agencia-cadastro/agencia-cadastro.component';
import { AgenciaPesquisaComponent } from './agencia-pesquisa/agencia-pesquisa.component';
import { AgenciaService } from './agencia.service';
import { RouterModule } from '@angular/router';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AgenciaCadastroComponent,
    AgenciaPesquisaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    AgenciaCadastroComponent,
    AgenciaPesquisaComponent
  ],
  providers: [AgenciaService],
  entryComponents: [MatConfirmDialogComponent]
})
export class AgenciaModule { }

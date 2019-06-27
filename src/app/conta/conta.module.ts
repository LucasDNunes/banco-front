import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaPesquisaComponent } from './conta-pesquisa/conta-pesquisa.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule, MatSelectModule, MatOptionModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { ContaCadastroComponent } from './conta-cadastro/conta-cadastro.component';

@NgModule({
  declarations: [ContaPesquisaComponent, ContaCadastroComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ ContaPesquisaComponent, ContaCadastroComponent ],
  entryComponents: [MatConfirmDialogComponent]
})
export class ContaModule { }

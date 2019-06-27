import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

@NgModule({
  declarations: [ClientePesquisaComponent, ClienteCadastroComponent],
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
  exports: [
    ClientePesquisaComponent, ClienteCadastroComponent
  ],
  entryComponents: [MatConfirmDialogComponent]
})
export class ClienteModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AgenciaPesquisaComponent } from './agencia/agencia-pesquisa/agencia-pesquisa.component';
import { AgenciaCadastroComponent } from './agencia/agencia-cadastro/agencia-cadastro.component';
import { AgenciaModule } from './agencia/agencia.module';
import { HttpClientModule } from '@angular/common/http';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ClientePesquisaComponent } from './cliente/cliente-pesquisa/cliente-pesquisa.component';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ContaModule } from './conta/conta.module';
import { ContaPesquisaComponent } from './conta/conta-pesquisa/conta-pesquisa.component';
import { ContaCadastroComponent } from './conta/conta-cadastro/conta-cadastro.component';
import { MatDialogSaqueDepositoComponent } from './mat-dialog-saque-deposito/mat-dialog-saque-deposito.component';
import { FormsModule } from '@angular/forms';

const rotas: Routes = [
  { path: 'agencias', component: AgenciaPesquisaComponent },
  { path: 'agencias/novo', component: AgenciaCadastroComponent },
  { path: 'agencias/:id', component: AgenciaCadastroComponent },
  { path: 'clientes', component: ClientePesquisaComponent },
  { path: 'clientes/novo', component: ClienteCadastroComponent },
  { path: 'clientes/:id', component: ClienteCadastroComponent },
  { path: 'contas', component: ContaPesquisaComponent },
  { path: 'contas/novo', component: ContaCadastroComponent },
  { path: 'contas/:id', component: ContaCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent,
    MatDialogSaqueDepositoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(rotas),
    MatDialogModule,
    MatSnackBarModule,
    AgenciaModule,
    ClienteModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MatConfirmDialogComponent,
    MatDialogSaqueDepositoComponent
  ]
})
export class AppModule { }

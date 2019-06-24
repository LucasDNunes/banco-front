import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatDialogModule, MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AgenciaPesquisaComponent } from './agencia/agencia-pesquisa/agencia-pesquisa.component';
import { AgenciaCadastroComponent } from './agencia/agencia-cadastro/agencia-cadastro.component';
import { AgenciaModule } from './agencia/agencia.module';
import { HttpClientModule } from '@angular/common/http';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

const rotas: Routes = [
  { path: 'agencias', component: AgenciaPesquisaComponent },
  { path: 'agencias/novo', component: AgenciaCadastroComponent },
  // { path: 'categorias/:id', component: CategoriasCadastroComponent },
  // { path: 'estados', component: EstadosPesquisaComponent },
  // { path: 'estados/novo', component: EstadosCadastroComponent },
  // { path: 'estados/:id', component: EstadosCadastroComponent },
  // { path: 'cidades', component: CidadesPesquisaComponent },
  // { path: 'cidades/novo', component: CidadesCadastroComponent },
  // { path: 'cidades/:id', component: CidadesCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(rotas),
    MatDialogModule,
    MatSnackBarModule,
    AgenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }

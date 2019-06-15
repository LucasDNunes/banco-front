import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciaCadastroComponent } from './agencia-cadastro/agencia-cadastro.component';
import { AgenciaPesquisaComponent } from './agencia-pesquisa/agencia-pesquisa.component';

@NgModule({
  declarations: [AgenciaCadastroComponent, AgenciaPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class AgenciaModule { }

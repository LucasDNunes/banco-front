import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from './conta-model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  contaUrl = 'http://localhost:8080/contas';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get<any>(this.contaUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.contaUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(conta: Conta): Promise<any> {
    return this.http.post(this.contaUrl, conta).toPromise();
  }

  buscarPorCodigo(id: number): Promise<Conta> {
    return this.http.get<Conta>(this.contaUrl + '/' + id).toPromise();
  }

  alterar(conta: Conta): Promise<any> {
    return this.http.put(this.contaUrl + '/' + conta.id, conta)
      .toPromise();
  }

  depositar(conta: Conta, valorDeposito: number) {
    return this.http.post(this.contaUrl + '/' + conta.id + '/depositar?deposito=' + valorDeposito, conta)
      .toPromise();
  }

  sacar(conta: Conta, valorsaque: number) {
    return this.http.put(this.contaUrl + '/' + conta.id + '/sacar?saque=' + valorsaque, conta)
      .toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agencia } from '../agencia/agencia-model';
import { Cliente } from './cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get<any>(this.clienteUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.clienteUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(cliente: Cliente): Promise<any> {
    return this.http.post(this.clienteUrl, cliente).toPromise();
  }

  // alterar(cliente: Cliente): Promise<any> {
  //   return this.http.put(this.clienteUrl + '/' + cliente.id, agencia)
  //     .toPromise();
  // }

  buscarPorCodigo(id: number): Promise<Cliente> {
    return this.http.get<Cliente>(this.clienteUrl + '/' + id).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agencia } from './agencia-model';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  agenciaUrl = 'http://localhost:8080/agencias';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get<any>(this.agenciaUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.agenciaUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(agencia: Agencia): Promise<any> {
    return this.http.post(this.agenciaUrl, agencia).toPromise();
  }

  alterar(agencia: Agencia): Promise<any> {
    return this.http.put(this.agenciaUrl + '/' + agencia.id, agencia)
      .toPromise();
  }

  buscarPorCodigo(id: number): Promise<Agencia> {
    return this.http.get<Agencia>(this.agenciaUrl + '/' + id).toPromise();
  }
}

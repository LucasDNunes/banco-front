import { Cliente } from '../cliente/cliente-model';
import { Agencia } from '../agencia/agencia-model';

export class Conta {
    id: number;
    cliente: Cliente;
    agencia: Agencia;
    saldo: number;
}
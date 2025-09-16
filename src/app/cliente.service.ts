import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    static REPO_CLIENTES = "_CLIENTES";

    constructor() { } 

    salvarCliente(objCliente: Cliente){
      console.log("Dados: ", objCliente);
      const storage = this.obterLocalStorage();
      storage.push(objCliente);

      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    }

    pesquisarCliente(nome: string) : Cliente[] {
      return this.obterLocalStorage();
    }

    private obterLocalStorage(): Cliente[] {
      const clientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
      if(clientes){
        const c: Cliente[] = JSON.parse(clientes);
        return c;
      }
      else{
        const c: Cliente[] = [];
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(c));
        return c;
      }
    }
}

import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  // key para local storage
  static REPO_CLIENTES = '_CLIENTES';

  constructor() {}

  // metodo para salvar cliente
  salvarCliente(objCliente: Cliente) {
    console.log('Dados: ', objCliente);
    const storage = this.clientesLocalStorage();
    storage.push(objCliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  // metodo para pesquisar cliente
  pesquisarCliente(name: string): Cliente[] {
    console.log(name)
    const clientesLocal = this.clientesLocalStorage();

    if (!name) {
      return clientesLocal;
    }
    else{
      console.log("log: ", clientesLocal.filter(cliente => cliente.nome?.indexOf(name)))
      return clientesLocal.filter(c => c.nome?.indexOf(name) !== -1)
    }
  }

  // metodo para listar todos os clientes
  private clientesLocalStorage(): Cliente[] {
    const clientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (clientes) {
      const c: Cliente[] = JSON.parse(clientes);
      return c;
    } else {
      const c: Cliente[] = [];
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(c));
      return c;
    }
  }
}

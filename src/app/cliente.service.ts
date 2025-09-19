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
      console.log('Passamos por aqui:cliente.service.ts');
      const todosClientes = this.obterLocalStorage();
      console.log('storage: ', todosClientes);
      
      if (!nome) {
        return todosClientes;
      }
      return todosClientes.filter(clienteSelecionado => clienteSelecionado.nome?.indexOf(nome) !== -1)
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

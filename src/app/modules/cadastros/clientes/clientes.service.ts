import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes() {
    return [
      {id: 1, nome: 'Cliente A'},
      {id: 2, nome: 'Cliente B'}
    ];
  }

  getCliente(id: number) {
    let clientes = this.getClientes();

    for (let i = 0; i < clientes.length; i++) {
      const curso = clientes[i];
      if (curso.id == id) {
        return curso;
      }
    }
    
    return null;
  }
}

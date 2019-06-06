import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: any[] = [
    {id: 1, nome: 'Cliente 01'},
    {id: 2, nome: 'Cliente 02'},
    {id: 3, nome: 'Cliente 03'},
  ]

  constructor() { }

  obterTodos() {
    return this.clientes;
  }

  obterPorId(id: number) {
    let lista = this.obterTodos();
    for (let i = 0; i < lista.length; i++) {
      const item = lista[i];
      if (item.id == id) {
        return item;
      }
    }
    return null;
  }
}

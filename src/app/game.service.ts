import { Injectable } from '@angular/core';
import { Tela } from './model/tela.model';
import { BehaviorSubject } from 'rxjs';
import { SalaPrincipalTela } from './telas/sala-principal.tela';
import { Item } from './model/item.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  itens$: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  telaAtual$: BehaviorSubject<Tela> = new BehaviorSubject(new SalaPrincipalTela());

  setTelaAtual(novaTela: Tela) {
    this.telaAtual$.next(novaTela);
  }
  adicionarItem(item: Item){
    if(!this.possuiItem(item)){
      this.itens$.next([...this.itens$.value, item]);
    }
  }

  removerItem(item: Item | string ){
    this.itens$.next(this.itens$.value.filter(i => i.id !== ((typeof item === 'string') ? item : item.id)));
  }

  possuiItem(item: Item | string ){
    return !!this.itens$.value.find(i => i.id === ((typeof item === 'string') ? item : item.id))
  }
}

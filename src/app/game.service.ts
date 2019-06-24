import { Injectable } from '@angular/core';
import { Tela } from './model/tela.model';
import { BehaviorSubject } from 'rxjs';
import { SalaPrincipalTela } from './telas/sala-principal.tela';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  setTelaAtual(novaTela: Tela) {
    this.telaAtual$.next(novaTela);
  }
  telaAtual$: BehaviorSubject<Tela> = new BehaviorSubject(SalaPrincipalTela);
}

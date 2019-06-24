import { Tela } from '../model/tela.model';
import { GameService } from '../game.service';
import { QuadroPrincipalTela } from './quadro.tela';
import { Elemento } from '../model/elemento.model';

export class SalaPrincipalTela implements Tela {
  static titulo = "Sala Principal";
  static id = "sala-principal";
  static img = "sala-principal.jpg"
  static elementos = [
    {
      id: 'quadro',
      positionX: 10,
      positionY: 30,
      width: 17,
      height: 19,
      acao: (game: GameService, click:Event) => {
        game.setTelaAtual(QuadroPrincipalTela)
      }
    }
  ]



}

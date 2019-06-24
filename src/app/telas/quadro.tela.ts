import { Tela } from '../model/tela.model';
import { GameService } from '../game.service';
import { SalaPrincipalTela } from './sala-principal.tela';

export class QuadroPrincipalTela implements Tela {
  static titulo = "Quadro Sala Principal";
  static id = "quadro-principal";
  static img = "quadro-sala-principal.jpg"
  static elementos = [
    {
      id: 'voltar',
      positionX: 48,
      positionY: 2.5,
      width: 10,
      height: 13,
      acao: (game: GameService) => {
        game.setTelaAtual(SalaPrincipalTela)
      }
    }
  ]
}

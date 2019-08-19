import { Tela } from '../model/tela.model';
import { GameService } from '../game.service';
import { QuadroPrincipalTela } from './quadro.tela';

export class SalaPrincipalT001Tela implements Tela {
  titulo = "Sala Principal";
  id = "T001";
  img = "T001.PNG"
  elementos = [
    {
      id: 'quadro',
      positionX: 20,
      positionY: 80,
      width: 10,
      height: 30,
      nome: "Quadro",
      acao: (game: GameService, click:Event) => {
        game.setTelaAtual(new QuadroPrincipalTela())
      }
    }
  ]
}
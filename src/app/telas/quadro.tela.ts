import { Tela } from '../model/tela.model';
import { GameService } from '../game.service';
import { SalaPrincipalTela } from './sala-principal.tela';
import { Chave } from '../itens/chave';

export class QuadroPrincipalTela implements Tela {
  titulo = "Quadro Sala Principal";
  id = "quadro-principal";
  img = "quadro-sala-principal.jpg"
  elementos = [
    {
      id: 'voltar',
      positionX: 48,
      positionY: 2.5,
      width: 10,
      height: 13,
      acao: (game: GameService) => {
        game.setTelaAtual(new SalaPrincipalTela())
      }
    },
    new Chave()
  ]
}

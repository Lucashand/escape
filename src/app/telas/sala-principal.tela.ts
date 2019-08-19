import { Tela } from '../model/tela.model';
import { GameService } from '../game.service';
import { SalaPrincipalT001Tela } from '../telas/sala-principal-T001.tela';
import { QuadroPrincipalTela } from './quadro.tela';
import { Elemento } from '../model/elemento.model';

export class SalaPrincipalTela implements Tela {
  titulo = "Sala Principal";
  id = "sala-principal";
  img = "sala-principal.jpg"
  elementos = [
    {
      id: 'quadro',
      positionX: 10,
      positionY: 30,
      width: 17,
      height: 19,
      nome: "Quadro",
      acao: (game: GameService, click:Event) => {
        game.setTelaAtual(new SalaPrincipalT001Tela())
      }
    }
  ]



}

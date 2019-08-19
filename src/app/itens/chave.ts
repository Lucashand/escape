import { GameService } from '../game.service';
import { Item } from '../model/item.model';
import { Elemento } from '../model/elemento.model';
import { CustomObj } from "../model/custom-obj.model";

export const chave: Item & Elemento & CustomObj = {
  nome: 'Chave',
  id: 'chave',
  positionX: 41,
  positionY: 43,
  img: 'chave.jpg',
  width: 30,
  foiPega: false,
  acao: (game: GameService) => {
    game.adicionarItem(chave)
    chave.foiPega = true;
  },
  deveAparecer: () => {
    return !chave.foiPega;
  }
}

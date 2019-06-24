import { GameService } from '../game.service';
import { Item } from '../model/item.model';
import { Elemento } from '../model/elemento.model';

export class Chave implements Item, Elemento {
  nome= "Chave"
  id= 'chave';
  positionX= 41;
  positionY= 43;
  img= 'chave.jpg';
  width= 30;
  public acao(game: GameService) {
    game.adicionarItem(this)
  }
  public deveAparecer(game: GameService) {
    return !game.possuiItem(this)
  }
}

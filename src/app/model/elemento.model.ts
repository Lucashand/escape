import { GameService } from '../game.service';

export class Elemento {
  id: string;
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  acao: (game: GameService, $event?: Event) => any;
}

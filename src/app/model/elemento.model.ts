import { GameService } from '../game.service';

export interface Elemento {
  id: string;
  nome?: string;
  positionX: number;
  positionY: number;
  width: number;
  height?: number;
  img?: string;
  acao: (game: GameService, $event?: Event) => any;
  deveAparecer?: (game: GameService) => boolean;
}

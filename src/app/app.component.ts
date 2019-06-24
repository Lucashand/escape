import { Component, OnInit, HostListener } from '@angular/core';
import { Tela } from './model/tela.model';
import { GameService } from './game.service';
import { SalaPrincipalTela } from './telas/sala-principal.tela';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'escape';
  gameContainerWidth: number;
  gameContainerheight: number;
  constructor(
    public gameService: GameService
  ){}

  ngOnInit(): void {
    this.gameService.setTelaAtual(SalaPrincipalTela);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var isPortrait = event.target.innerHeight > event.target.innerWidth;
    if(isPortrait){
      document.body.classList.add('portrait');
      document.body.classList.remove('landscape');
    } else {
      document.body.classList.add('landscape');
      document.body.classList.remove('portrait');
    }
    this.gameContainerWidth = isPortrait ? event.target.innerHeight : event.target.innerWidth;
    this.gameContainerheight = isPortrait ? event.target.innerWidth : event.target.innerHeight;
  }
}



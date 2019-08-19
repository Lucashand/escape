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
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {

    const bodySize = document.body.getBoundingClientRect();
    var heighIsMaior = bodySize.height > bodySize.width;
    if(heighIsMaior){
      document.body.classList.add('portrait');
      document.body.classList.remove('landscape');
    } else {
      document.body.classList.add('landscape');
      document.body.classList.remove('portrait');
    }
    this.gameContainerWidth = heighIsMaior ? bodySize.height  : bodySize.width;
    this.gameContainerheight = heighIsMaior ? (bodySize.width) -1 : bodySize.height;
  }
}



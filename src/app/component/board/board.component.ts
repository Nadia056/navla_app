// ./src/app/board.component.ts

// import needed classes and services
import { Component, ViewContainerRef } from '@angular/core';

import { BoardService } from 'src/app/Services/board.service';
import { Route, Router, RouterLink } from '@angular/router';
import { Server, Socket } from 'socket.io'



// set game constants
const NUM_PLAYERS: number= 1;
const BOARD_SIZE: number = 8;
const waitingPlayers: Socket[] = [];
interface Tile {
  value: number | string;
  status: string;
  used: boolean;
  hidden: boolean;
  valueColor: string ;
  row: number;
  col: number;
  coordinate: string;
}

interface Player {
  id?: number;
  score: number;
}

interface Board {
  tiles: Tile[][];
  player: Player;
}
const playerId = localStorage.getItem('playerId');
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService],
  template: `
  <button (click)="startGame()">Start Game</button>
`
})


export class BoardComponent {
   score: number = 0;

   email = localStorage.getItem('email');
   playerId!: number;
 
  constructor(
    private boardService: BoardService,private router: Router
  ) {
    
    this.createBoards();
    this.playerId = Number(localStorage.getItem('id'));
  }
  
  onTileClick(board: Board, tile: Tile, rowIndex: number, colIndex: number): void {
    if (tile.value === 1) {
      tile.value = "X";
      tile.valueColor = "white"; 
      alert("HIT")

   
      console.log(tile.coordinate = `${String.fromCharCode(97 + colIndex)}${1 + rowIndex}`, this.email, board.player.id);
      this.score++;
      console.log(this.score);
      // set valueColor to white when value is "X"
    } else if (tile.value === 0){
      tile.value = "O";
      tile.valueColor = "white";
      alert("MISS")
      
      console.log(tile.coordinate = `${String.fromCharCode(97 + colIndex)}${1+rowIndex}`, this.email, board.player.id);
      // set valueColor to white when value is "O"
    }
  }
  
  
  createBoards(): BoardComponent {
    this.playerId = Number(localStorage.getItem('playerId'));
    for (let i = 0; i < NUM_PLAYERS; i++)
      this.boardService.createBoard(BOARD_SIZE);
    return this;
  }

  get boards(): Board[] {
    return this.boardService.getBoards() as Board[];
  }
  cerrar()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }
}



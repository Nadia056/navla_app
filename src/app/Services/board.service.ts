// ./src/app/board.service.ts

import { Injectable } from '@angular/core';
import { Board } from '../Classes/board';
import { Player } from '../Classes/player';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardService {

  playerId: number;
  boards: Board[] = [];


  constructor(private http: HttpClient, ) { 
    this.playerId = Number(localStorage.getItem('id'));
  }


  createBoard(size:number = 5) : BoardService {    
    // create tiles for board
    let tiles: { used: boolean; value: number; status: string }[][] = [];
    for(let i=0; i < size; i++) {
      tiles[i] = [];
      for(let j=0; j< size; j++) {
        tiles[i][j] = { used: false, value: 0, status: '' };
      }
    }
    // generate random ships for the board
    for (let i = 0; i < (size * 4)-2; i++) {
      tiles = this.randomShips(tiles, size);
    }
    // create board
    let board = new Board({
      player: new Player({ id: this.playerId++ }),
      tiles: tiles
    });
    // append created board to `boards` property
    this.boards.push(board);
    return this;
  }

  randomShips(tiles: { used: boolean; value: number; status: string }[][], len: number) : { used: boolean; value: number; status: string }[][] {
    len = len - 1;
    let ranRow = this.getRandomInt(0, len),
        ranCol = this.getRandomInt(0, len);
    if (tiles[ranRow][ranCol].value == 1) {
      return this.randomShips(tiles, len);
    } else {
      tiles[ranRow][ranCol].value = 1;
      return tiles;
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBoards() : Board[] {
    return this.boards;
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  winner = '';

  makeMove(index:number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.board[line[0]] && this.board[line[0]] === this.board[line[1]] && this.board[line[1]] === this.board[line[2]]) {
        this.winner = this.board[line[0]];
        break;
      }
    }
  }
  resetGame() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = 'X';
    this.winner = '';
  }
}


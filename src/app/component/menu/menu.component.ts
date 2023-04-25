import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Server, Socket } from 'socket.io';
import { HttpClient } from '@angular/common/http';
import { GameService } from 'src/app/Services/game.service';

// Define the game constants
const NUM_PLAYERS = 2;
const BOARD_SIZE = 8;

// Create an array to store the waiting players
const waitingPlayers: Socket[] = [];


@Component({
  selector: 'app-menu',
  template: `
  <br>
   <button (click)="joinGame()" class="btn btn-info">Unirse al juego</button>
   <br>
   <br>
   <button (click)="cerrar()" class="btn btn-danger">Cerrar</button>

  <p>{{ message }}</p>
`,

})

export class MenuComponent {

  message!: string;
  gameId!: number;
  playerId!: number;

  constructor(private http: HttpClient,private router: Router, private gameService:GameService) {}


  joinGame() {
    this.gameId = 1; // reemplaza este valor con el id del juego actual
    this.playerId = 2; // reemplaza este valor con el id del jugador actual
    
    this.gameService.joinGame2(this.gameId, this.playerId);
  }
  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
//   ngOnit() {
//     const playerName = 'Juan'; // reemplaza este valor con el nombre del jugador actual
//     this.gameService.joinGame(playerName).subscribe(response => {
//       console.log(response)
//       if (response == 201) {
//         alert("Esperando Jugador");
//       }
//       else if (response == 200) {

//         this.router.navigate(['/board']);
//       }
//     });
//   }
//   join() {
//   const gameID=1;
//   const id=localStorage.getItem('id');
//   this.gameService.playGame(gameID,id ).subscribe((response) => {
//     console.log(response);
//     if (response == 201) {
//       this.message = "Esperando Jugador";
//     }
//     else if (response == 200) {
//       this.message = "Juego Iniciado";
//       this.router.navigate(['/board']);
//     }
//     else if (response == 400) {
//       this.message = "Ya hay un juego en curso";
//     }
// })

//   }


  // ngOnInit(): void {
  //   const player = ( "player" );
  //   this.http.post('http://127.0.0.1:3333/game/wait', player).subscribe((response) => {
  //     console.log(response);
  //     if (response == 201) {
  //       this.message = "Esperando Jugador";
  //     }
  //     else if (response == 200) {
  //       this.message = "Juego Iniciado";
      
  //     }
  //     else if (response == 400) {
  //       this.message = "Ya hay un juego en curso";
  //     }
  //     else if (response == 500) {
  //       this.message = "Nos encontramos en mantenimiento";
  //     }
  //   });
  // }
  


  // startGame() {
  //   this.http.get('http://127.0.0.1:3333/game/start').subscribe((response) => {
  //     console.log(response);
  //     if (response == 200) {
  //       this.router.navigate(['/board']);
  //     }
  //     else if (response == 201) {
  //       alert("Esperando Jugador");
  //     }
      
    

  //   });
  // }
  
  



}
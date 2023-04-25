import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";
import { Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    


   }
   socket = io('http://127.0.0.1:3333');


   joinGame2(gameId: number, playerId: number) {
    this.socket.emit('joinGame', { gameId, playerId });
    this.socket.send('joinGame', { gameId, playerId });

  }

  joinGame(playerName: string) {
    return this.http.post(`${this.baseUrl}/game/wait`, { playerName });

  }
  playGame(gameId: number, id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/game/play`, { gameId, id });
  }
}

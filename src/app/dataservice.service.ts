import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardService } from './Services/board.service';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(

    private boardService: BoardService,
    private http: HttpClient
  )
  { }
}

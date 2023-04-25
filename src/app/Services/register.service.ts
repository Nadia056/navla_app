
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, Subject, tap, throwError } from 'rxjs';
import { user } from '../Models/user'; 
import { environment } from '../environment';
import {  HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 urlapi = environment.apiUrl;
 
  private _refresh$ = new Subject<void>();

  private crearPersona = this.urlapi + "/register"

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }
  get refresh$() { return this._refresh$ }


  
  constructor(private http: HttpClient) { }

  addPersona(persona: user): Observable<any> {
    return this.http.post<user>(this.crearPersona, persona)
      .pipe(catchError(this.handleError))
      .pipe(tap(() => {
        this._refresh$.next();
      }));
  }
}

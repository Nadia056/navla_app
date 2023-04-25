import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Observable, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../environment';
import { login } from 'src/app/Models/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlapi = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(login:login): Observable<any> {
    
    return this.http.post(`${this.urlapi}/login`, login);
  };
  

  logout() {
    this.http.post(`${this.urlapi}/logout`, {});
    localStorage.removeItem('token');

  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getID(email:string) {
    this.http.get(`${this.urlapi}/register/${email}`).subscribe((response) => {
      console.log(response);
      let id:any = response;
      localStorage.setItem('id', id);
      
    });
  }



}

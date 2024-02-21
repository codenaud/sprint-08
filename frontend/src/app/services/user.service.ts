//user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    //  this.myAppUrl = environment.endpoint; =>  // ! error insalvable
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'api/users/';
  }
  getListUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}

/**
 * TODO: En el tutorial utiliza enviorements, nosotros aquí directamente añadimos el localhost aquí!
 * ! ERROR de CORS en la consola => ir a backend/src/models/server.ts y añadir en middelwares
 */

//user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { updateUser } from '../../../../backend/src/controllers/user.controller';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint; //** va a endpoint de enviroment.development */
    // this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'api/users/';
  }
  getListUsers(): Observable<User[]> {
    console.log(this.myApiUrl);
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  deleteUser(id: number): Observable<void> {
    console.log(this.myApiUrl);
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  saveUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, user);
  }
}

/**
 * TODO: En el tutorial utiliza enviorements, nosotros aquí directamente añadimos el localhost aquí!
 * ! ERROR de CORS en la consola => ir a backend/src/models/server.ts y añadir en middelwares
 */

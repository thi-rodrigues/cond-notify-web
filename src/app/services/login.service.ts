import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.homologacao';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBackend = `${environment.apiBackend}/auth/login`;

  constructor(readonly http: HttpClient) {}

  login(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiBackend}`, login);
  }

  logout()  {
    localStorage.removeItem('user');
    location.href = "/login";
  }
}

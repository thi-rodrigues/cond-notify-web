import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem("user") || '');
  }
}

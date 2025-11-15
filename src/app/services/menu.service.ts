import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openMenu!: boolean;

  constructor() {}

  showMenu(): boolean {
    console.log('aqui');
    return this.openMenu = !this.openMenu;
  }
}

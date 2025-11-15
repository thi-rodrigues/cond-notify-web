import { MenuService } from './../../../services/menu.service';
import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {

  // openMenu!: boolean;

  constructor(private loginService: LoginService, readonly menuService: MenuService) {}

  logout() {
    this.loginService.logout();
  }
}

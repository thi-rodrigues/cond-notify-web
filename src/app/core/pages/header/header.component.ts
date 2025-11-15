import { UserService } from './../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  // page = input<string>();
  // openMenu!: boolean;

  constructor(private loginService: LoginService, readonly userService: UserService, private menuService: MenuService){}

  ngOnInit(): void {
    // console.log(location.href);
    // this.openMenu = false;
    // console.log(this.page());

  }

  // logout() {
  //   this.loginService.logout();
  // }

  showMenu() {
    // this.openMenu = !this.openMenu;
    this.menuService.showMenu();
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/pages/footer/footer.component';
import { HeaderComponent } from './core/pages/header/header.component';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';
import { AsideComponent } from "./core/pages/aside/aside.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cond-notify-web';

  constructor(readonly menuService: MenuService){}

  ngOnInit(): void {
    // this.page = location.href;
  }
}

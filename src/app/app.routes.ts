import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: []
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
    canActivate: [],
  },
  {
    path: 'https://condnotify.netlify.app/home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
    canActivate: [],
  },
  {
    path: 'order-details/:id',
    loadComponent: () =>
      import('./core/pages/order-details/order-details.component').then(
        (c) => c.OrderDetailsComponent
      ),
    canActivate: []
  },
  {
    path: 'https://condnotify.netlify.app/order-details/:id',
    loadComponent: () =>
      import('./core/pages/order-details/order-details.component').then(
        (c) => c.OrderDetailsComponent
      ),
    canActivate: []
  }
];

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
    path: 'morador/cadastrar',
    loadComponent: () =>
      import('./core/pages/morador/morador.component').then(
        (c) => c.MoradorComponent
      ),
    canActivate: [],
  },
  {
    path: 'order-details/:id',
    loadComponent: () =>
      import('./core/pages/order/order-details/order-details.component').then(
        (c) => c.OrderDetailsComponent
      ),
    canActivate: []
  },
  {
    path: 'order-register',
    loadComponent: () =>
      import('./core/pages/order/order-register/order-register.component').then(
        (c) => c.OrderRegisterComponent
      ),
    canActivate: []
  },
];

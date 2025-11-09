import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable({
	providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private jwtHelperService: JwtHelperService,
		private router: Router,
    private userService: UserService
	) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    if ( this.userService.getUser() ) {
      let user = this.userService.getUser();
      if (user && !this.jwtHelperService.isTokenExpired(user.token)) {
        return next.handle(
          req.clone({
            headers: req.headers.set('Authorization', `Bearer ${user.token}`),
          }),
        );
      }
    }
    return throwError(() => 'Sua seção expirou!');
	}
}

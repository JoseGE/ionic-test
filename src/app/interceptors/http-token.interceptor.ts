import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.userService.getAuthorizationToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+ authToken)
    });

   
    return next.handle(authReq);
  }
}
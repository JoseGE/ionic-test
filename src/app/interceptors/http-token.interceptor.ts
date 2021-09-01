import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    avoidUrls: Array<string>;
  constructor(private userService: UserService) {
    this.avoidUrls = [
        '/sign_in'
    ]
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const isValidUrl = this.isValidUrlForInterceptor(req.url);
    const authToken = this.userService.getAuthorizationToken();
    if(!authToken) {
        return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+ authToken)
    });

   
    return next.handle(authReq);
  }

  private isValidUrlForInterceptor(url: string): boolean {
    return true;
  }
}
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: `Beare token`
          }
        });
      }
    } catch (err) { }

    return next.handle(request);
  }
}

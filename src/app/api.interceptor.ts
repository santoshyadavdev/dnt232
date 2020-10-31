import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if (request.method === 'GET') {
      const req = request.clone({ headers: new HttpHeaders().set('jwttoken', 'fghfdjkghkkjf4564654') });
      return next.handle(req);
    }
    return next.handle(request);
  }

}

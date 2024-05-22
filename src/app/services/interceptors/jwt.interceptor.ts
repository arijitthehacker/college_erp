import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../commonService/common.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(public commonService: CommonService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.commonService.getToken();
    // request = request.clone({
    // });

    if (token) {
      request = request.clone({
        setHeaders: {
          authorization: `${token}`,
        },
      });
    }
    return next.handle(request);
  }
}

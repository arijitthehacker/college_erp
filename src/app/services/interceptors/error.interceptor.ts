import { MessageService } from '../message/message.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from '../commonService/common.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private message: MessageService,
              private router: Router, public commonService: CommonService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(event => {
      }, error => {
        switch (error.status) {
          case 401:

            this.commonService.afterLogout()

            this.message.toast('error', 'Missing Authentication');
            /********** Auto logout if 401 response returned from api **********/
            // localStorage.clear();
            this.router.navigate(['/login']);
            // this.message.alert('error', 'OOPS!', 'Sorry, Please login again to continue.');
            break;
          case 0:
            /********** If server dosent respond **********/
            this.message.alert('error', 'OOPS!', 'Please check internet connection!');
            break;
          default:
            /********** Check for other serve-side errors **********/
            this.message.toast('error', error.error.message);
            break;
        }
      }));
  }

}

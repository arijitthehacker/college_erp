import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../commonService/common.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private message: MessageService,
    public commonService: CommonService
  ) { }

  canActivate(): boolean {
    if (!!this.commonService.getToken()) {
      return true;
    }
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from '../commonService/common.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        protected router: Router,
        public commonService: CommonService
    ) { }

    canActivate() {
        if (!this.commonService.getToken()) {
            return true;
        }
        this.router.navigate(['/owners']);
        return false;
    }

}

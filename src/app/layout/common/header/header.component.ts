import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/commonService/common.service';
import { Router } from '@angular/router';
import { CONSTANT } from '../../../core/constant';
import { MessageService } from '../../../services/message/message.service';
import { HttpService } from '../../../services/http/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  showSideBar = true;
  appTitle = CONSTANT.SITE_NAME;
  profileData: any = {};
  officeName = localStorage.getItem('officeName');

  constructor(public commonService: CommonService, public router: Router, private message: MessageService,
              public http: HttpService, private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    // this.profileData = JSON.parse(localStorage.getItem('profileData'));
    this.commonService.getProfileData();

  }

  getMessage() {
    this.commonService.getMessage().subscribe(res => {
      switch (res.type) {
        case 'updateNotificationList':
          break;
      }
    });
  }

  showHeadingName() {

  }

  // getProfileData() {
  //   this.http.getData(ApiUrl.access_token_login).subscribe(res => {
  //     localStorage.setItem('profileData', JSON.stringify(res.data));
  //   });
  // }

  logout() {
    this.message.confirm(`Logout`).then(res => {
      if (res.isConfirmed) {
        this.commonService.afterLogout();
      }
    });
  }

  closeNav() {
    if (this.showSideBar) {
      document.getElementById('app-sidebar').style.width = '230px';
      document.getElementById('app-content').style['margin-left'] = '230px';
    } else {
      document.getElementById('app-sidebar').style.width = '56px';
      document.getElementById('app-content').style['margin-left'] = '53px';

    }
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/commonService/common.service';
import { Router } from '@angular/router';
import { CONSTANT } from '../../../core/constant';
import { MessageService } from '../../../services/message/message.service';
import { HttpService } from '../../../services/http/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ApiUrl } from '../../../core/apiUrl';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  showSideBar = true;
  appTitle = CONSTANT.SITE_NAME;
  profileData: any = {};
  notifications: any = [];

  constructor(public commonService: CommonService, public router: Router, private message: MessageService,
              public http: HttpService, private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.commonService.getProfileData();
    this.getNotifications();
    this.getProfileData();
  }

  getProfileData() {
    this.http.getData(ApiUrl.access_token_login, {}, true).subscribe(res => {
      console.log(res,'56666666666666666666666666666');
    });
  }

  getMessage() {
    this.commonService.getMessage().subscribe(res => {
      switch (res.type) {
        case 'updateNotificationList':
          break;
      }
    });
  }

  onShown() {
    console.log('aaaaaa', 'isOpenChangeisOpenChangeisOpenChange');
    this.getNotifications();
  }

  getNotifications() {
    this.http.getData(ApiUrl.list_notification, {}, true).subscribe(res => {
      this.notifications = res.data;
      console.log(this.notifications);
    });
  }

  readNotifications() {
    this.http.putData(ApiUrl.read_notification).subscribe(res => {
      console.log(res, 'res');
    });
  }

  clearNotifications() {
    this.http.putData(ApiUrl.clear_notification).subscribe(res => {
      console.log(res, 'res');
    });
  }

  apiHit() {
    let obj: any = {
      device_token: localStorage.getItem('device_token'),
      message: 'hiiiii'
    };
    this.http.postData(ApiUrl.send_custom_notification, obj).subscribe(res => {
      console.log(res, 'http');
    });
  }

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

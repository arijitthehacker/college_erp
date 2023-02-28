import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/commonService/common.service';
import { Router } from '@angular/router';
import { CONSTANT } from '../../../core/constant';
import { MessageService } from '../../../services/message/message.service';
import { HttpService } from '../../../services/http/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ApiUrl } from '../../../core/apiUrl';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  showSideBar = true;
  appTitle = CONSTANT.SITE_NAME;
  profileData: any = {};
  notifications: any = [];
  message: any = null;
  device_token;

  constructor(public commonService: CommonService, public router: Router, private messageService: MessageService,
              public http: HttpService, private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.commonService.getProfileData();
    this.getNotifications();
    this.getProfileData();

    this.requestPermission();
    this.listen();

  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      {vapidKey: environment.firebase.vapidKey}).then(
      (currentToken) => {
        if (currentToken) {
          this.device_token = currentToken;
          localStorage.setItem('device_token', currentToken);
          this.saveToken();
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
      this.messageService.toast('info', this.message.notification.title);
    });
  }

  saveToken() {
    let obj: any = {
      device_type: 3,
      device_token: this.device_token
    };
    this.http.postData(ApiUrl.update_device_token, obj).subscribe(res => {

    });
  }

  getProfileData() {
    this.http.getData(ApiUrl.access_token_login, {}, true).subscribe(res => {
      this.profileData = res.data;
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
    this.getNotifications();
  }

  getNotifications() {
    this.http.getData(ApiUrl.list_notification, {}, true).subscribe(res => {
      this.notifications = res.data;
    });
  }

  readNotifications() {
    this.http.putData(ApiUrl.read_notification, true).subscribe(res => {
      this.getProfileData();
    });
  }

  clearNotifications(data?) {
    let obj: any = {};
    if (data) {
      obj._id = data._id;
    }
    this.http.putData(ApiUrl.clear_notification,obj).subscribe(res => {
      this.getNotifications();
    });
  }

  apiHit() {
    let obj: any = {
      device_token: localStorage.getItem('device_token'),
      message: 'hiiiii'
    };
    this.http.postData(ApiUrl.send_custom_notification, obj).subscribe(res => {
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

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CONSTANT } from '../../core/constant';
import { MessageService } from '../message/message.service';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title;
  breadcrumb;
  CONSTANT = CONSTANT;
  profileData: any = {};
  public subject = new Subject<any>();

  constructor(private location: Location, private message: MessageService, public lightbox: Lightbox,
              public router: Router) {

  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getProfileData() {
    if (!!localStorage.getItem(CONSTANT.tokenKey)) {
      this.profileData = JSON.parse(localStorage.getItem('profileData'));
    }
  }

  getToken() {
    if (!!localStorage.getItem(CONSTANT.tokenKey)) {
      return localStorage.getItem(CONSTANT.tokenKey);
    } else {
      return '';
    }
  }

  setToken(data) {
    localStorage.setItem(CONSTANT.tokenKey, data);
  }

  goBack() {
    this.location.back();
  }

  cal(page, limit, count) {
    if (page * limit <= count) {
      return page * limit;
    } else {
      return count;
    }
  }

  checkBlockUnblock(data) {
    this.message.toast('success', `${data.is_blocked ? 'Unblocked' : 'Blocked'} Successfully!`);
    data.is_blocked = !data.is_blocked;
  }

  openLightBox(url) {
    if (url) {
      const album = {
        src: url,
        thumb: url,
        downloadUrl: url
      };
      const imgArr = [album];
      this.lightbox.open(imgArr, 0);
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  checkPDFLink(url) {
    let isPdf = false;
    if (url) {
      if (url.includes('pdf')) {
        isPdf = true;
      }
    }
    return isPdf;
  }

  checkVideoLink(url) {
    let isVideo = false;
    if (url) {
      if (url.includes('mp4', '3gp', 'ogg')) {
        isVideo = true;
      }
    }
    return isVideo;
  }

  removeEmptyKeys(obj) {
    Object.keys(obj).forEach((k) => {
      if (obj[k] == false) {
      } else if (obj[k] == null || obj[k] == '') {
        delete obj[k];
      }
    });
  }

  getTimeFromMinutes(time) {
    const start = new Date();
    start.setHours(0, time, 0, 0);
    return start;
  }

  getOffset() {
    function isDST(t) { //t is the date object to check, returns true if daylight saving time is in effect.
      let jan = new Date(t.getFullYear(), 0, 1);
      let jul = new Date(t.getFullYear(), 6, 1);
      return Math.min(jan.getTimezoneOffset(), jul.getTimezoneOffset()) == t.getTimezoneOffset();
    }

    let DST = isDST(new Date());
    let offsetMinutes = new Date().getTimezoneOffset();
    let finalMinutes;
    if (offsetMinutes == 240 || offsetMinutes == 300) {
      finalMinutes = (DST == true) ? (offsetMinutes + 60) : (offsetMinutes);
    } else {
      finalMinutes = offsetMinutes;
    }
    return finalMinutes;
  }

  afterLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  copyText(link) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = link + '/2';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.message.toast('success', 'Copied to Clipboard');
  }

  getJSON(url) {

    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.responseType = 'json';
      xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
          let myData: any = JSON.stringify(xhr.response);
          let parsed: any = JSON.parse(myData);
          resolve(parsed);
        } else {
          reject(status);
        }
      };
      xhr.send();
    });
  };

}

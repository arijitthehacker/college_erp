import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'src/app/services/message/message.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { SIDEBAR } from '../../../core/constant';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  sideBar: any = SIDEBAR;
  selectedIndex = 0;
  selectedRoute = 'appointments';
  showSideBar = false;

  constructor(private message: MessageService, private modalService: BsModalService, private router: Router,
              public activatedRoute: ActivatedRoute, public commonService: CommonService) {
  }

  ngOnInit() {
    this.selectedRoute = this.router.url;
    this.setSelectedIndex();
  }

  setSelectedIndex() {
    this.sideBar.forEach((val, key) => {
      if (this.selectedRoute === '/' + val.path) {
        this.selectedIndex = key;
      }
    });
  }

  logout() {
    this.message.confirm(`Logout`).then(res => {
      if (res.isConfirmed) {
        this.commonService.afterLogout();
      }
    });
  }

  optionClick(index, flag?) {
    this.selectedIndex = index;

    switch (flag) {
      case 1:
        this.showSideBar = false;
        break;
      case 2:
        this.sideBar[index].isCollapsed = !this.sideBar[index].isCollapsed;
        break;
      case 3:
        this.showSideBar = false;
        break;
      case 4:
        this.showSideBar = false;
        this.logout();
        break;
    }

    if (!this.showSideBar) {
      if ((screen.width <= 640) || (window.matchMedia && window.matchMedia('only screen and (max-width: 640px)').matches)) {
        document.getElementById('app-sidebar').style.width = '0';
        document.getElementById('app-content').style['margin-left'] = '0';
      }
    }
  }

  // optionClick(index?) {
  //   // if (this.showSideBar) {
  //   //     document.getElementById('app-sidebar').style.width = '230px';
  //   //     document.getElementById('app-content').style['margin-left'] = '230px';
  //   // } else {
  //
  //   this.selectedIndex = index;
  //   if ((screen.width <= 640) || (window.matchMedia && window.matchMedia('only screen and (max-width: 640px)').matches)) {
  //     // if (typeof window.orientation !== 'undefined') {
  //     document.getElementById('app-sidebar').style.width = '0';
  //     document.getElementById('app-content').style['margin-left'] = '0';
  //     // }
  //   }
  //
  //   // }
  // }

  changePassword() {
    this.modalService.show(ChangePasswordComponent, {
      backdrop: 'static',
      keyboard: false
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'src/app/services/message/message.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ROLES } from '../../../core/constant';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  sideBar: any = ROLES;
  selectedIndex = 0;
  selectedRoute = 'appointments';
  showSideBar = false;
  profileData: any = {};

  constructor(private message: MessageService, private modalService: BsModalService, private router: Router,
              public activatedRoute: ActivatedRoute, public commonService: CommonService) {

    if (localStorage.getItem('profileData')) {
      this.profileData = JSON.parse(localStorage.getItem('profileData'));
      if (this.profileData.admin_type === 'SUB_ADMIN') {
        this.setSubSideBar(this.profileData.web_roles);
      } else {
        // this.sideBar = ROLES;
        this.setSuperAdminSideBar(this.profileData.web_roles);
      }
    }

    this.selectedRoute = this.router.url;
    this.setSelectedIndex();
    let openedIndex = 0;
    this.sideBar.forEach((val, key) => {
      if (val.children) {
        val.children.forEach((val1) => {
          if (this.router.url === '/' + val1.path) {
            openedIndex = key;
          }
        });
      }
    });
    this.optionClick(openedIndex, 2);
  }

  setSubSideBar(data) {
    console.log(data, 'data');

    let sideBar: any = [];
    this.sideBar.forEach((val, key) => {
      let children: any = [];
      data?.forEach((val1, key1) => {

        val?.children?.forEach((val2, key2) => {
          val1?.sub_modules?.forEach((val3, key3) => {
            if (val2.id == val3.name) {
              console.log(val2.path, val3.name, '777777777', val2);
              children.push(val2);
            }
          });
        });
        val.children1 = children;
        if (val.id === val1.name) {
          sideBar.push(val);
        }
      });
    });

    this.sideBar = sideBar;

    console.log(sideBar, 'roles');
  }

  setSuperAdminSideBar(data) {
    console.log(data, 'data1111');
    let sideBar: any = [];
    this.sideBar.forEach((val, key) => {
              val.children1 = val?.children;
    });
    console.log(sideBar, 'roles');
  }

  ngOnInit() {

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
    if (this.selectedIndex !== index) {
      this.sideBar.forEach((val) => {
        val.isCollapsed = false;
      });
    }
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

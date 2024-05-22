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
  childreenIndex: any;
  childItemSelected: boolean;

  constructor(private message: MessageService, private modalService: BsModalService, private router: Router,
              public activatedRoute: ActivatedRoute, public commonService: CommonService) {

              }

  ngOnInit() {
    console.log(this.sideBar,'....sidebar')
    this.selectedRoute = this.router.url;

    this.setSelectedIndex();
    let openedIndex = 0;
    this.sideBar.forEach((val, key) => {
      if (val.children) {
        val.children.forEach((val1) => {
          if (this.router.url === '/' + val1.path) {
            openedIndex = key;
            console.log(openedIndex)
          }
        });
      }
    });
    this.optionClick(openedIndex, 2);
  }

  subSelectedIndex: any

  selectedIndexSub(index) {
  this.subSelectedIndex = index
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
    console.log(this.selectedIndex)
    switch (flag) {
      case 1:
        this.showSideBar = false;
        break;
      case 2:
        console.log('asdasd')
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

}

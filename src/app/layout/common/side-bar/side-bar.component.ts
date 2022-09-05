import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'src/app/services/message/message.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import {  SIDEBAR } from '../../../core/constant';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  sideBar = SIDEBAR;
  selectedIndex = 0;
  selectedRoute = 'appointments';

  constructor(private message: MessageService, private modalService: BsModalService, private router: Router,
              public activatedRoute: ActivatedRoute) {
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

  optionClick(index) {
    // if (this.showSideBar) {
    //     document.getElementById('app-sidebar').style.width = '230px';
    //     document.getElementById('app-content').style['margin-left'] = '230px';
    // } else {

    this.selectedIndex = index;
    if ((screen.width <= 640) || (window.matchMedia && window.matchMedia('only screen and (max-width: 640px)').matches)) {
      // if (typeof window.orientation !== 'undefined') {
      document.getElementById('app-sidebar').style.width = '0';
      document.getElementById('app-content').style['margin-left'] = '0';
      // }
    }

    // }
  }

  changePassword() {
    this.modalService.show(ChangePasswordComponent, {
      backdrop: 'static',
      keyboard: false
    });
  }

  logout() {
    this.message.confirm(`Logout`).then(res => {
      if (res.isConfirmed) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { Lightbox } from 'ngx-lightbox';
import { ProAddressesComponent } from './pro-addresses/pro-addresses.component';
import { AddProAddressComponent } from './add-pro-address/add-pro-address.component';
import { MemberDetailsComponent } from '../customer-leads/member-details/member-details.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './properties.component.html'
})
export class PropertiesComponent implements OnInit {

  allData: any = [];
  date = '';
  pagination = new PaginationControls();

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip
    };
    this.http.getData(ApiUrl.list_properties, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    }, () => {
    });
  }

  blockUnblock(data: any) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.managed_peroperties, obj).subscribe(() => {
      this.commonService.checkBlockUnblock(data);
    }, () => {
    });
  }

  deleteData(data: any) {
    this.message.confirm(`delete this ${this.commonService.title}`).then(res => {
      if (res.isConfirmed) {
        const obj: any = {
          _id: data._id,
          is_deleted: true
        };
        this.http.putData(ApiUrl.managed_peroperties, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getData();
        }, () => {
        });
      }
    });

  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddPropertyComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-more-lg'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }

  openProAddresses(data?: any) {
    const modalRef = this.modalService.show(ProAddressesComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-lg'
    });
    modalRef.content.onClose.subscribe(res => {
      this.getData();
      if (res.type === 'addAddress') {
        this.openAddAddress(data);
      }
      if (res.type === 'editAddress') {
        this.openAddAddress(res.data, data);
      }
    });
  }

  openAddAddress(propertyData?, modalData?) {
    const modalRef = this.modalService.show(AddProAddressComponent, {
      initialState: {modalData, propertyData},
      backdrop: 'static',
      keyboard: false,
      class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(res => {
      this.getData();
      if (res.type === 'openAddressList') {
        this.openProAddresses(propertyData);
      }
    });
  }

  openProDetails(data?: any) {
    const modalRef = this.modalService.show(ProDetailsComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-more-lg'
    });
  }


}

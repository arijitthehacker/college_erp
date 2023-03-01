import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { PaymentComponent } from '../../shared/components/payment/payment.component';
import * as moment from 'moment/moment';
import { RejectReasonComponent } from './reject-reason/reject-reason.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './advance-request.component.html'
})
export class AdvanceRequestComponent implements OnInit {

  allData: any = [];
  date = '';
  pagination = new PaginationControls();
  search = '';
  category = 'ALL';
  dates = new FormControl([]);
  currentDate = new Date();
  prevDate = new Date();

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.dates.patchValue([new Date(this.prevDate.setMonth(this.prevDate.getMonth() - 1)), new Date()]);
    this.dates.valueChanges.subscribe(res => {
      this.getData();
    });
    this.getData();
  }

  emptyDate() {
    this.dates.patchValue([]);
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip,
      type: 'EARLY'
    };
    if (this.search) {
      obj.search = this.search;
    }
    if (this.category) {
      obj.category =  this.category;
    }
    if (this.dates.value) {
      const data: any = this.dates.value;
      if (data?.length) {
        obj.start_date = moment(data[0]).format('yyyy-MM-DD');
        obj.end_date = moment(data[1]).format('yyyy-MM-DD');
      }
    }
    this.http.getData(ApiUrl.accounts_list, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    }, () => {
    });
  }

  openPaymentModal(data?: any) {
    const modalRef = this.modalService.show(PaymentComponent, {
      initialState: {modalData: data, advancePage: true}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe((res: any) => {
      this.getData();
    });
  }

  cancelRequest(data) {
    const modalRef = this.modalService.show(RejectReasonComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(() => {
      // const obj: any = {
      //   _id: data._id
      // };
      // this.http.putData(ApiUrl.decline_advance_request, obj).subscribe(() => {
      //   this.message.toast('success', 'Cancelled Successfully!');
      this.getData();
      // }, () => {
      // });
    });
  }

  //
  // cancelRequest(data) {
  //   const modalRef = this.modalService.show(RejectReasonComponent, {
  //     initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
  //   });
  //   modalRef.content.onClose.subscribe(() => {
  //     // const obj: any = {
  //     //   _id: data._id
  //     // };
  //     // this.http.putData(ApiUrl.decline_advance_request, obj).subscribe(() => {
  //     //   this.message.toast('success', 'Cancelled Successfully!');
  //     this.getData();
  //     // }, () => {
  //     // });
  //   });
  // }
}

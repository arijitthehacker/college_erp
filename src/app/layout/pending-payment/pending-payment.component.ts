import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentComponent } from '../../shared/components/payment/payment.component';
import * as moment from 'moment/moment';
import { RejectReasonComponent } from '../advance-request/reject-reason/reject-reason.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './pending-payment.component.html'
})
export class PendingPaymentComponent implements OnInit {

  allData: any = [];
  date = '';
  pagination = new PaginationControls();
  search;
  category = 'ALL';
  dates = new FormControl([]);
  currentDate = new Date();
  prevDate = new Date();
  isForSearch: any;

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router) {
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

  searchData() {
    this.isForSearch = true
    this.getData()
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip,
      type: 'PENDING'
    };
    if (this.search) {
      obj.search = this.search;
      obj.skip = 0
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
      if (this.isForSearch) {
        this.isForSearch = false
        this.pagination.pageNo =1
        this.pagination.skip =0
      }
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    }, () => {
    });
  }

  imageOrNot(data){
    console.log(data,'...data')
    let temp;
    data.all_status.forEach(element => {
      if(element.name == 'SPA Signed'){
        temp = element.image
      }
    });
    return temp;
  }

  openPaymentModal(data?: any) {
    const modalRef = this.modalService.show(PaymentComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe((res: any) => {
      this.getData();
    });
  }

  // cancelRequest(data) {
  //   this.message.confirm(`rejcet this request`).then(res => {
  //     if (res.isConfirmed) {
  //       const obj: any = {
  //         _id: data._id
  //       };
  //       this.http.putData(ApiUrl.decline_advance_request, obj).subscribe(() => {
  //         this.message.toast('success', 'Cancelled Successfully!');
  //         this.getData();
  //       }, () => {
  //       });
  //     }
  //   });
  // }


  cancelRequest(data) {
    const modalRef = this.modalService.show(RejectReasonComponent, {
      initialState: {modalData: data, type:'pending'}, backdrop: 'static', keyboard: false, class: 'modal-md'
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

}

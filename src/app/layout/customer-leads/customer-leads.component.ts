import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { StatusesComponent } from './statuses/statuses.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { ProDetailsComponent } from '../properties/pro-details/pro-details.component';
import { PaidComponent } from './paid/paid.component';
import { AssignBookingComponent } from './assign-booking/assign-booking.component';
import { LogsComponent } from './logs/logs.component';
import { AddFinalPriceComponent } from './add-final-price/add-final-price.component';
import { AddCustomerLeadComponent } from './add-customer-lead/add-customer-lead.component';
import { ChangeStatusComponent } from "./change-status/change-status.component";

@Component({
  selector: 'app-accounts',
  templateUrl: './customer-leads.component.html'
})
export class CustomerLeadsComponent implements OnInit {

  allData: any = [];
  date = '';
  status = '';
  search = '';
  pagination = new PaginationControls();

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router) {
  }

  ngOnInit() {
    this.getData();
  }

  openPaidModal(data, type) {

    let modalData: any = {};
    switch (type) {
      case 1:
        modalData = data.group_payment_id;
        break;
      case 2:
        modalData = data.agent_payment_id;
        break;
      case 3:
        modalData = data.member_payment_id;
        break;
    }
    this.modalService.show(PaidComponent, {
      initialState: {modalData: modalData}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
  }

  searchFun() {
    this.pagination.pageNo = 1;
    this.getData();
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip
    };
    if (this.status) {
      obj.last_status = this.status;
    }
    if (this.search) {
      obj.search = this.search;
    }

    this.http.getData(ApiUrl.list_customer_request, obj).subscribe(res => {

      res.data.data.forEach((val) => {
        if(val.group_payment_status === 'REJECTED' ||
          val.agent_payment_status === 'REJECTED' ||
          val.member_payment_status === 'REJECTED'||
        val.gold_member_payment_status === 'REJECTED'
      ){
          val.last_status_name = 'payout_rejected';
        }

      });

      this.allData = res.data.data;

      this.pagination.count = res.data.total_count;
    }, () => {
    });
  }

  checkStatus(data) {
    let returnValue = '';
    switch (data) {
      case 'PENDING':
        returnValue = 'Pending';
        break;
      case 'REJECTED':
        returnValue = 'Rejected';
        break;
      default:
        returnValue = 'Pending';
        break;
    }
    return data;
  }

  blockUnblock(data: any) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.manage_plans, obj).subscribe(() => {
      this.commonService.checkBlockUnblock(data);
    }, () => {
    });
  }

  deleteData(data: any) {
    this.message.confirm(`delete this customer lead`).then(res => {
      if (res.isConfirmed) {
        const obj: any = {
          _id: data._id,
          is_deleted: true
        };
        this.http.postData(ApiUrl.edit_customer_request, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getData();
        }, () => {
        });
      }
    });
  }

  openStatus(data?: any) {
    this.modalService.show(StatusesComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-more-lg'
    });
  }

  openLogs(data) {
    this.pagination.count = 0;
    const modalRef = this.modalService.show(LogsComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-more-lg'
    });
    modalRef.content.onClose.subscribe((res: any) => {
      this.getData();
    });
  }


  openChangeStatus(data) {
    const modalRef = this.modalService.show(ChangeStatusComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe((res: any) => {
      this.getData();
    });
  }

  openMemberDetails(data?: any, showLabel?, type?) {
    if (data?.name) {
      data.type = type;
      this.modalService.show(MemberDetailsComponent, {
        initialState: {modalData: data, showLabel}, backdrop: 'static', keyboard: false, class: 'modal-md'
      });
    }
  }

  openProDetails(data?: any) {
    const modalRef = this.modalService.show(ProDetailsComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-more-lg'
    });

  }

  // openPaymentModal(data?: any, type?: number) {
  //   data.type = type;
  //   const modalRef = this.modalService.show(PaymentComponent, {
  //     initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
  //   });
  //   modalRef.content.onClose.subscribe((res: any) => {
  //     if (res?.type) {
  //       if (res?.type === 'openPaymentHistory') {
  //         this.openPaidModal(data, type);
  //       }
  //     } else {
  //       this.getData();
  //     }
  //   });
  // }

  assignBooking(data?: any, type?: number) {
    data.type = type;
    const modalRef = this.modalService.show(AssignBookingComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }

  addFinal(data?: any) {
    const modalRef = this.modalService.show(AddFinalPriceComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }

  acceptReject(data, status) {
    let obj: any = {
      status,
      _id: data._id

    };
    this.http.putData(ApiUrl.customer_request_managed, obj).subscribe(() => {
      if (status == 'APPROVED') {
        this.message.toast('success', 'Accepted Successfully!');
      } else {
        this.message.toast('success', 'Rejected Successfully!');
      }
      this.getData();
    }, () => {
    });
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddCustomerLeadComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-lg'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }



}

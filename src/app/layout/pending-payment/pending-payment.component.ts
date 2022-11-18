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

@Component({
  selector: 'app-accounts',
  templateUrl: './pending-payment.component.html'
})
export class PendingPaymentComponent implements OnInit {

  allData: any = [];
  date = '';
  pagination = new PaginationControls();
  search = new FormControl('');

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip,
      type: 'PENDING'
    };
    if (this.search.value) {
      obj.search = this.search.value;
    }
    this.http.getData(ApiUrl.accounts_list, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    }, () => {
    });
  }



  openPaymentModal(data?: any) {
    const modalRef = this.modalService.show(PaymentComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe((res: any) => {
      this.getData();
    });
  }

  cancelRequest(data) {
    this.message.confirm(`cancel this request`).then(res => {
      if (res.isConfirmed) {
        const obj: any = {
          _id: data._id
        };
        this.http.putData(ApiUrl.decline_advance_request, obj).subscribe(() => {
          this.message.toast('success', 'Cancelled Successfully!');
          this.getData();
        }, () => {
        });
      }
    });
  }

}

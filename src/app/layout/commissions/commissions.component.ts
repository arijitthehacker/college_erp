import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCommissionComponent } from './add-commission/add-commission.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-accounts',
  templateUrl: './commissions.component.html'
})
export class CommissionsComponent implements OnInit {

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
      skip: this.pagination.skip
    };
    if (this.search.value) {
      obj.search = this.search.value;
    }
    this.http.getData(ApiUrl.list_comission, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
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
        this.http.putData(ApiUrl.managed_comission, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getData();
        }, () => {
        });
      }
    });
  }

  blockUnblock(data: any) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.managed_comission, obj).subscribe(() => {
      this.commonService.checkBlockUnblock(data);
    }, () => {
    });
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddCommissionComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }

}

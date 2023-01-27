import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from '../../../services/http/http.service';
import { PaginationControls1 } from '../../../shared/models/pagination-model';

@Component({
  selector: 'app-add-account',
  templateUrl: './logs.component.html'
})
export class LogsComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;
  pagination1 = new PaginationControls1()
  allData: any = [];

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService,
              public http: HttpService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.pagination1.skip = (this.pagination1.pageNo - 1) * this.pagination1.limit;
    let obj: any = {
      skip: this.pagination1.skip,
      _id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_lead_logs, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination1.count = res.data.total_count;
      console.log(this.pagination1.count, 'this.pagination.count');
    }, () => {
    });
  }

}



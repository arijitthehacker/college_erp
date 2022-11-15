import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './logs.component.html'
})
export class LogsComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;
  allData: any = [];

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService,
              public http: HttpService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let obj: any = {
      _id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_lead_logs, obj).subscribe(res => {
      this.allData = res.data.data;
      console.log(this.allData, '     this.allData');
    }, () => {
    });
  }

}



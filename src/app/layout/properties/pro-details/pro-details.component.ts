import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './pro-details.component.html'
})
export class ProDetailsComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService,
              public http: HttpService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let obj: any = {
      skip: 0,
      _id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_properties, obj).subscribe(res => {
      this.modalData = res.data.data[0];
      console.log(this.modalData, 'this.modalData ');
    }, () => {
    });
  }

}



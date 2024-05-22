import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './statuses.component.html'
})
export class StatusesComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;
  showStatus: any = [];

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    if (this.modalData?.status?.length) {
      this.modalData.status.forEach((val) => {
        if (val.status_data != 'PENDING') {
          if (val.managed_by === 'GROUP_OWNER') {
            val.managed_by_name = this.modalData?.group_owner_id?.name;
          }else if (val.managed_by === 'ADMIN') {
            val.managed_by_name = 'Admin';
          } else {
            val.managed_by_name = this.modalData?.agent_id?.name;
          }
          this.showStatus.push(val);
        }
      });
    }
    // status_data
    //   :
    //   "PENDING"  }
  }
}



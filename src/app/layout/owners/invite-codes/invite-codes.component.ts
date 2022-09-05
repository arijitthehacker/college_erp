import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './invite-codes.component.html'
})
export class InviteCodesComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService
  ) {
  }

  ngOnInit() {
  }

}



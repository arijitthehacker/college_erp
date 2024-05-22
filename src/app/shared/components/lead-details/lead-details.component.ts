import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';
import { HttpService } from '../../../services/http/http.service';

@Component({
    selector: 'app-add-account',
    templateUrl: './lead-details.component.html'
})
export class LeadDetailsComponent implements OnInit {

    public onClose: Subject<{}> = new Subject();
    modalData: any;
    selectedTab = 1;

    constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService,
                public http: HttpService) {
    }

    ngOnInit() {
    }

    clickTab(flag) {
        this.selectedTab = flag;
    }


}



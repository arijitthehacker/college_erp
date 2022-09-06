import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';
import { ConstMsg } from '../../../core/ConstMsg';

@Component({
  selector: 'app-add-account',
  templateUrl: './pro-addresses.component.html'
})
export class ProAddressesComponent implements OnInit {

  showError = false;
  public onClose: Subject<any> = new Subject();
  modalData: any;
  allData: any = [];

  constructor(public message: MessageService, private http: HttpService, public bsModalRef: BsModalRef,
              public commonService: CommonService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getData();
  }

  openAddAddress(data?) {
    this.bsModalRef.hide();
    if (data) {
      this.onClose.next({type: 'editAddress', data});
    } else {
      this.onClose.next({type: 'addAddress'});
    }
  }

  getData() {
    let obj = {
      is_pagination: false,
      property_id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_property_address, obj, true).subscribe(res => {
      this.allData = res.data.data;
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
        this.http.putData(ApiUrl.managed_peroperty_address, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getData();
        }, () => {
        });
      }
    });
  }


}



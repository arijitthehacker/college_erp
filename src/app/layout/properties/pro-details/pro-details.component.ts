import {Component, OnInit} from '@angular/core';
import {MessageService} from 'src/app/services/message/message.service';
import {findIndex, Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {CommonService} from '../../../services/commonService/common.service';
import {ApiUrl} from '../../../core/apiUrl';
import {HttpService} from '../../../services/http/http.service';
import {PROPERTY_TYPES} from "../../../core/constant";

@Component({
  selector: 'app-add-account',
  templateUrl: './pro-details.component.html'
})
export class ProDetailsComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();
  modalData: any;
  selectedTab = 1;
  addresses: any = [];
  PROPERTY_TYPES = PROPERTY_TYPES

  constructor(public message: MessageService, public bsModalRef: BsModalRef, public commonService: CommonService,
              public http: HttpService) {
  }


  ngOnInit() {
    this.getData();
    this.getAddress();
  }

  setEmptyValue(flag, key) {
    if (flag === 1) {
      console.log('11111111111');
      return (key === 9999 || key === 0) ? '-' : key;
    } else {
      return (key === 999 || key === 0) ? '-' : key;
    }
  }

  clickTab(flag) {
    this.selectedTab = flag;
  }

  getAddress() {
    let obj: any = {
      property_id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_property_address, obj, true).subscribe(res => {
      this.addresses = res.data.data;
    });
  }

  getData() {
    let obj: any = {
      skip: 0,
      _id: this.modalData._id
    };
    this.http.getData(ApiUrl.list_properties, obj, true).subscribe(res => {
      if (res.data.data?.length) {
        this.modalData = res.data.data[0];
        PROPERTY_TYPES.forEach(value => {
          if (value.id === this.modalData.peropert_type) {
            this.modalData.show_peropert_type = value.name
          }
        })
        // PROPERTY_TYPES.forEach(val => {
        //   val.show_peropert_type = val.peropert_type
        // })


      }
    }, () => {
    });
  }

}



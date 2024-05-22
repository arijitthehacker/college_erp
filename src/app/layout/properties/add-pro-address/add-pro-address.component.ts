import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-pro-address.component.html'
})
export class AddProAddressComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<any> = new Subject();
  modalData: any;
  propertyData: any;
  cities: any = [];
  states: any = [];

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.getStateData();
    this.getCityData();
  }

  makeForm() {
    this.form = this.fb.group({
      lng: ['', Validators.required],
      name: ['', Validators.required],
      state_id: ['', Validators.required],
      city_id: ['', Validators.required],
      lat: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      lng: data.location.coordinates[0],
      state_id: this.propertyData.state_id._id,
      city_id: this.propertyData.city_id._id,
      name: data.address,
      lat: data.location.coordinates[1]
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      obj[`property_id`] = this.propertyData._id;

      this.http.postData(ApiUrl.add_edit_peroperty_address, obj).subscribe(() => {
        this.onClose.next({type: 'openAddressList'});
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

  getStateData() {
    this.http.getData(ApiUrl.list_states).subscribe(res => {
      this.states = res.data.data;
    });
  }

  getCityData() {
    if (this.form?.value?.state_id) {
      this.http.getData(ApiUrl.list_cities, {state_id: this.form.value.state_id}).subscribe(res => {
        this.cities = res.data.data;
      });
    }
  }

}



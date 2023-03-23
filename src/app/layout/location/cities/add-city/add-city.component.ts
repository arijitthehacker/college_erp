import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-city.component.html'
})
export class AddCityComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  states: any = [];

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.getStateList();
  }

  makeForm() {
    this.form = this.fb.group({
      state_id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      lat: ['', Validators.compose([Validators.required])],
      lng: ['', Validators.compose([Validators.required])]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      name: data.name,
      state_id: data.state_id._id,
      lng: data.location.coordinates[0],
      lat: data.location.coordinates[1],

    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      this.http.postData(ApiUrl.add_edit_cities, obj).subscribe(() => {
        this.onClose.next(null);
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

  getStateList() {
    let obj: any = {
      skip: 0,
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_states, obj).subscribe(res => {
      this.states = res.data.data;
    }, () => {
    });
  }

}



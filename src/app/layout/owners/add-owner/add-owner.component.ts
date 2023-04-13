import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';
import { CountryISO } from 'ngx-intl-tel-input';
import { CONSTANT } from '../../../core/constant';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-owner.component.html'
})
export class AddOwnerComponent implements OnInit {

  showError = false;
  CountryISO = CountryISO;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CONSTANT.email_pattern)]],
      phone_number: ['', Validators.required],
      bank_name: [''],
      account_name: [''],
      account_number: [''],
      sort_code: [''],
      name: ['', [Validators.required]]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      bank_name: data.bank_name,
      sort_code: data.sort_code,
      account_number: data.account_number,
      account_name: data.account_name,
      email: data.email,
      name: data.name,
      phone_number: data.phone_number
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      let apiUrl = ApiUrl.add_edit_group_owner
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
        apiUrl = ApiUrl.add_edit_group_owner
      }

      obj.iso_code = obj.phone_number.countryCode;
      obj.country_code = obj.phone_number.dialCode;
      obj.phone_number = obj.phone_number.number;

      this.http.postData(apiUrl, obj).subscribe(() => {
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

}



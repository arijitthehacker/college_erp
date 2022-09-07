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
      phone_number: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      email: data.email,
      name: data.name,
      phone_number: data.phone_number
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      console.log(obj, 'obj');
      obj.iso_code = obj.phone_number.countryCode;
      obj.country_code = obj.phone_number.dialCode;
      obj.phone_number = obj.phone_number.number;

      this.http.postData(ApiUrl.add_edit_group_owner, obj).subscribe(() => {
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



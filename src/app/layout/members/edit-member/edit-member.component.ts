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
  templateUrl: './edit-member.component.html'
})
export class EditMemberComponent implements OnInit {

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
      name: ['',Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      email: data.email || '',
      name: data.name || '',
      image: data.image || '',
      bank_name: data.bank_name || '',
      sort_code: data.sort_code || '',
      account_number: data.account_number || '',
      account_name: data.account_name || '',
      phone_number: data.phone_number || ''
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      if (!obj.email) {
        delete obj.email;
      }

      if (!obj.name) {
        delete obj.name;
      }
      if (!obj.image) {
        delete obj.image;
      }

      if (obj.phone_number) {
        obj.iso_code = obj.phone_number.countryCode;
        obj.country_code = obj.phone_number.dialCode;
        obj.phone_number = obj.phone_number.number;
      } else {
        delete obj.phone_number;
      }

      this.http.putData(ApiUrl.managed_members, obj).subscribe(() => {
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

  selectImage(event: any, id) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      this.form.controls.image.patchValue(response.data.original);
    }, () => {
    });
  }

  removeImage(id) {
    document.getElementById(id)[`value`] = '';
    this.form.controls.image.patchValue('');
  }
}



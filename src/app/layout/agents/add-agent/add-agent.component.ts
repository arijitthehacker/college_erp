import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'src/app/services/message/message.service';
import {ApiUrl} from 'src/app/core/apiUrl';
import {HttpService} from 'src/app/services/http/http.service';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ConstMsg} from 'src/app/core/ConstMsg';
import {CommonService} from '../../../services/commonService/common.service';
import {CountryISO} from 'ngx-intl-tel-input';
import {CONSTANT} from '../../../core/constant';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-agent.component.html'
})
export class AddAgentComponent implements OnInit {

  showError = false;
  showError1 = false;
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


  makeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CONSTANT.email_pattern)]],
      name: ['', Validators.required],
      bank_name: [''],
      image: [''],
      account_name: [''],
      account_number: [''],
      sort_code: [''],
      phone_number: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      email: data.email,
      bank_name: data.bank_name,
      image: data.image,
      sort_code: data.sort_code,
      account_number: data.account_number,
      account_name: data.account_name,
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

      if (!obj.image) {
        delete obj.image;
      }

      if (obj.phone_number) {
        obj.iso_code = obj.phone_number.countryCode;
        obj.country_code = obj.phone_number.dialCode;
        obj.phone_number = obj.phone_number.number;
      } else {
        this.form.patchValue({
          phone_number: ''
        });
        this.showError = true;
        this.showError1 = true;
        return;
      }

      console.log(this.form);

      this.http.postData(ApiUrl.add_edit_agents, obj).subscribe(() => {
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



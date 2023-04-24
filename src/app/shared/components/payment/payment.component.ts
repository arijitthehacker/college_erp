import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'src/app/services/message/message.service';
import {ApiUrl} from 'src/app/core/apiUrl';
import {HttpService} from 'src/app/services/http/http.service';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {CommonService} from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  advancePage: boolean;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  makeForm() {
    this.form = this.fb.group({
      transaction_id: ['', Validators.required],
      transaction_image: ['', Validators.required],
      transaction_comment: [''],
      advanced_payment: [''],
      _id: ['']
    });

    if (this.advancePage) {
      this.form.controls['advanced_payment'].setValidators([Validators.required]);
      this.form.controls['advanced_payment'].updateValueAndValidity();
    }
  }

  patchData(data) {
    this.form.patchValue({
      // transaction_id: data.transaction_id,
      // transaction_image: data.transaction_image,
      // transaction_comment: data.transaction_comment,
      // advanced_payment: data.advanced_payment,
      _id: data._id
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));

      if (!obj.transaction_comment) {
        delete obj.transaction_comment;
      }

      if (!obj.advanced_payment) {
        delete obj.advanced_payment;
      }

      if (this.advancePage) {
        let leftAmount = this.modalData?.total_price - this.modalData?.advanced_price;
        console.log('111111111111',leftAmount );
        if (obj.advanced_payment > leftAmount) {
          console.log('11111111111');
          this.message.toast('error', 'Advance payment should be less than pending payment');
          return;
        }
        // obj.advanced_payment = this.modalData?.total_price;

      }

      this.http.putData(ApiUrl.managed_payment_request, obj).subscribe(() => {
        this.onClose.next(null);
        this.message.toast('success', 'Sent Successfully!');
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

  selectImage(event: any, id) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      this.form.controls.transaction_image.patchValue(response.data.original);
    }, () => {
    });
  }

  removeImage(id) {
    document.getElementById(id)[`value`] = '';
    this.form.controls.transaction_image.patchValue('');
  }

}



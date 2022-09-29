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
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    console.log(this.modalData, 'advanced_price');
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      advanced_price: ['', [Validators.required]],
      _id: ['']
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      advanced_price: data.advanced_price,
      _id: data._id
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));

      if (this.modalData.type === 1) {
        obj.type = 'USER';
      } else if (this.modalData.type === 1) {
        obj.type = 'AGNET';
      } else {
        obj.type = 'GROUP_OWNER';
      }

      if (this.modalData.advanced_price === this.form.value.advanced_price) {
        obj.status = 'COMPLETED';
      } else {
        if (this.modalData.advanced_price < this.form.value.advanced_price) {
          this.message.toast('error', 'You can transfer maximum of ' + this.modalData.advanced_price);
          return;
        }
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
}



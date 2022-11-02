import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  paymentData: any;

  paidAmount = 0;
  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    console.log(this.modalData, 'modalData');
    this.makeForm();
    if (this.modalData.type === 1) {
      this.paymentData = this.modalData.group_payment_id;
    } else if (this.modalData.type === 2) {
      this.paymentData = this.modalData.agent_payment_id;
    } else {
      this.paymentData = this.modalData.member_payment_id;
    }

    console.log(this.paymentData, ' this.paymentData  this.paymentData ');

    if (this.modalData) {
      this.patchData(this.paymentData);
    }

  }

  makeForm() {
    this.form = this.fb.group({
      advanced_price: ['', Validators.required],
      _id: ['']
    });

  }

  patchData(data) {
    this.form.patchValue({
      advanced_price: data.advanced_price,
      _id: data._id
    });
    if (!this.paymentData?.advanced_request) {
      this.form.controls.advanced_price.patchValue(this.paymentData.total_price);
    }

    console.log(this.paymentData, 'paymentDatapaymentData');
    if (this.paymentData?.payment_logs && this.paymentData?.payment_logs?.length) {

      console.log('1111');
      this.paymentData.payment_logs.forEach((val) => {
        console.log(val);
        this.paidAmount = this.paidAmount + val.price;
      });
    }

    console.log(this.paidAmount,'    this.paidAmount ');

  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));

      if (this.modalData.type === 1) {
        obj.type = 'GROUP_OWNER';
      } else if (this.modalData.type === 2) {
        obj.type = 'AGENT';
      } else {
        obj.type = 'USER';
      }

      if (this.paymentData.total_price === this.form.value.advanced_price) {
        obj.is_completed = true;
        delete obj.advanced_price;
      } else {
        if (this.paymentData.total_price < this.form.value.advanced_price) {
          this.message.toast('error', 'You can transfer maximum of ' + this.paymentData.total_price);
          return;
        }
      }

      if (this.form.value.advanced_price == 0) {
        this.message.toast('error', 'You can transfer only greater than 0');
        return;
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

  openPayment(){
    this.onClose.next({type:'openPaymentHistory'});
    this.bsModalRef.hide();
  }
}



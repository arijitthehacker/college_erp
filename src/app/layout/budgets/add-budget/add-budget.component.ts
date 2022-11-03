import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';
import { Currencies } from '../../../core/constant';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-budget.component.html'
})
export class AddBudgetComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  currencyList: any = Currencies;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      max_price: [''],
      min_price: ['', Validators.required],
      currency: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      min_price: data.min_price,
      max_price: data.max_price,
      currency: data.currency
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      if (this.form?.value?.max_price) {
        if (parseInt(this.form?.value?.min_price, 10) > parseInt(this.form?.value?.max_price, 10)) {
          this.message.toast('error', 'Max price should be greater than or equal to min price');
          return;
        }
      } else {
        obj.max_price = 0;
      }

      this.http.postData(ApiUrl.add_edit_peroperty_budgets, obj).subscribe(() => {
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
    this.form.controls.image.patchValue(id);
  }

}



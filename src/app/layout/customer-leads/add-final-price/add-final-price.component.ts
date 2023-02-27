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
  templateUrl: './add-final-price.component.html'
})
export class AddFinalPriceComponent implements OnInit {

  showError = false;
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
      commission_price: ['', Validators.required],
      unit_no: ['', Validators.required],
      _id: [this.modalData._id]
    });

    if(this.modalData){
      this.patchData(this.modalData)
    }

  }

  patchData(data){
    this.form.patchValue({
      commission_price: data.commission_price,
      unit_no: data.unit_no
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));

      this.http.putData(ApiUrl.update_request_commsion, obj).subscribe(() => {
        this.onClose.next(null);
        this.message.toast('success', 'Updated Successfully!');
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }


}



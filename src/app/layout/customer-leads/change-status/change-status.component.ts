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
  templateUrl: './change-status.component.html'
})
export class ChangeStatusComponent implements OnInit {

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
      status_id: ['', Validators.required],
    });

  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      obj._id = this.modalData._id;
      if(this.form.value.status_id === 'rejected'){
        obj.status = 'REJECTED';
      }else {
        obj.status = 'APPROVED';
      }

      this.http.putData(ApiUrl.manage_customer_status, obj).subscribe(() => {
        this.onClose.next(null);
        this.message.toast('success', 'Assigned Successfully!');
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

}



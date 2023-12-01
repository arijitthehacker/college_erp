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
  templateUrl: './add-commission.component.html'
})
export class AddCommissionComponent implements OnInit {

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
      name: ['', Validators.compose([Validators.required])],
      agent_commision: ['', Validators.compose([Validators.required, Validators.max(100)])],
      group_owner_commision: ['', Validators.compose([Validators.required, Validators.max(100)])],
      member_commision: ['', Validators.compose([Validators.required, Validators.max(100)])],
      gold_member_commision: ['', Validators.compose([Validators.required, Validators.max(100)])],
      gold_member_plus_commision:['',Validators.compose([Validators.required, Validators.max(100)])]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      name: data.name,
      member_commision: data.member_commision,
      gold_member_commision: data.gold_member_commision,
      group_owner_commision: data.group_owner_commision,
      agent_commision: data.agent_commision,
      gold_member_plus_commision:data.gold_member_plus_commision
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      this.http.postData(ApiUrl.add_edit_comission, obj).subscribe(() => {
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



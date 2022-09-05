import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './help-modal.component.html'
})
export class HelpModalComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public modalRef: BsModalRef, public commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      messageBody: ['', [Validators.required]]
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      this.http.postData(ApiUrl.sendHelpMessage, obj).subscribe(() => {
        this.message.toast('success', 'Message Sent Successfully!');
        this.modalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

}



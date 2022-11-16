import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../services/commonService/common.service';
import { ActivatedRoute } from '@angular/router';
import { ApiUrl } from '../../core/apiUrl';

@Component({
  selector: 'app-add-account',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  showError = false;
  form: FormGroup;
  type;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(res => {
      this.type = res.type;
      this.getData();
    });
  }

  ngOnInit() {
    this.makeForm();

  }

  makeForm() {
    this.form = this.fb.group({
      member_share_link: ['', Validators.required]
    });

  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      this.http.putData(ApiUrl.managed_user_share_link, obj).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);
      }, () => {
      });

    } else {
      this.showError = true;
    }
  }

  getData() {
    this.http.getData(ApiUrl.user_share_link_details).subscribe(res => {
      this.form.controls.member_share_link.patchValue(res.data.member_share_link);
    });
  }

}



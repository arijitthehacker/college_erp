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
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  showError = false;
  form: FormGroup;
  type;
  profileData;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    if (localStorage.getItem('profileData')) {
      this.profileData = JSON.parse(localStorage.getItem('profileData'));
    }
  }

  ngOnInit() {
    this.makeForm();

  }

  makeForm() {
    this.form = this.fb.group({
      email: [ this.profileData?.email , Validators.required]
    });

  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      this.http.postData(ApiUrl.update_profile, obj).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);
      }, () => {
      });

    } else {
      this.showError = true;
    }
  }

}



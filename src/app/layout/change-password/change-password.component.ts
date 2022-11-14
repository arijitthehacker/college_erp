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
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

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
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

  }

  formSubmit() {
    if (this.form.valid) {
      if (this.form.value.password != this.form.value.confirmPassword) {
        this.message.toast('error', 'Password and confirm password should be same');
        return;
      }
      this.http.postData(ApiUrl.update_profile,
        {password: JSON.parse(JSON.stringify(this.form.value.password))}).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonService } from 'src/app/services/commonService/common.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { CONSTANT } from '../../core/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  show = false;
  form: FormGroup;
  appTitle = CONSTANT.SITE_NAME;
  showPass = false;

  constructor(private fb: FormBuilder, private http: HttpService, public commonService: CommonService,
              private router: Router, private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CONSTANT.email_pattern)]],
      password: ['', Validators.required]
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));

      this.http.postData(ApiUrl.login, obj).subscribe(res => {
          this.commonService.setToken(res.data.access_token);
          res.data.email = this.form.value.email;
          localStorage.setItem('profileData', JSON.stringify(res.data));
          this.router.navigate(['/owners']);
        }, () => {
        }
      );
    } else {
      this.show = true;
    }
  }

  openForgotPassword(data?: any) {
    const modalRef = this.modalService.show(ForgotPasswordComponent, {
      initialState: {modalData: {email: this.form.value.email}},
      backdrop: 'static',
      keyboard: false,
      class: 'modal-md'
    });
    modalRef.content.onClose.subscribe(() => {
    });
  }
}

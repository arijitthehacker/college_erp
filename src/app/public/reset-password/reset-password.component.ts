import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from '../../services/http/http.service';
import { MessageService } from '../../services/message/message.service';
import { ApiUrl } from '../../core/apiUrl';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  show = false;
  form: FormGroup;
  showPass = false;
  showSuccess = false;
  passwordResetToken;

  constructor(
    private fb: FormBuilder, private message: MessageService, private router: Router,
    private http: HttpService, private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    localStorage.clear();
    this.activatedRoute.queryParams.subscribe(data => {
      this.passwordResetToken = data.passwordResetToken;
    });
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  formSubmit(): void {
    this.show = true;
    if (this.form.valid) {
      if (this.form.value.password === this.form.value.confirmPassword) {
        const obj = {
          newPassword: this.form.value.password,
          passwordResetToken: this.passwordResetToken
        };
        this.http.putData(ApiUrl.resetPassword, obj).subscribe(res => {
          this.showSuccess = true;
        }, () => {
        });
      } else {
        this.message.alert('info', 'Password and confirm password not matched!');
      }
    }
  }

}

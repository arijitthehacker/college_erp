import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/commonService/common.service';
import { ApiUrl } from '../../../core/apiUrl';

@Component({
  selector: 'app-add-account',
  templateUrl: './change-member-password.component.html'
})
export class ChangeMemberPasswordComponent implements OnInit {

  showError = false;
  form: FormGroup;
  showPass = false
  type;
  profileData;
  apiUrl;
  modalData: any = {};

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
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      // password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.required]
    });

  }

  formSubmit() {
    if (this.form.valid) {
      let len = (this.form.value.password).toString();
      if (len.length > 6) {
        this.message.toast('error', 'Password should be minimum of 6 characters.');
        return;
      }
      if (this.form.value.password != this.form.value.confirmPassword) {
        this.message.toast('error', 'Password and confirm password should be same');
        return;
      }
      let obj = {
        password: JSON.parse(JSON.stringify(this.form.value.password)),
        _id: this.modalData._id
      };
      this.http.putData(this.apiUrl, obj).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);

        this.bsModalRef.hide()
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

}



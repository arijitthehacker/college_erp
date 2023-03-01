import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';
import { ApiUrl } from '../../../core/apiUrl';
import { ROLES } from '../../../core/constant';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-admin.component.html'
})
export class AddAdminComponent implements OnInit {

  showError = false;
  form: FormGroup;
  savedData;
  roles: any = JSON.parse(JSON.stringify(ROLES));

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
    if (localStorage.getItem('savedData')) {
      this.savedData = JSON.parse(localStorage.getItem('savedData'));
    }
  }

  ngOnInit() {
    this.makeForm();

  }

  makeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', this.savedData ? Validators.required : '']
    });

    if (this.savedData) {
      this.patchData(this.savedData);
      this.setSelectedValues(this.savedData.roles);
    }
  }

  setSelectedValues(data) {
    this.roles.forEach((val, key) => {

      let index = findIndex(data, (e: any) => {
        return e.name == val.path;
      }, 0);
      // console.log(index, 'index');

      if (index >= 0) {
        val.isSelected = true;
      }
      if (val.isSelected) {
        val?.children?.forEach((val1) => {

          console.log(this.savedData.roles[index].sub_modules, 'val.sub_modules');

          let index1 = findIndex(this.savedData.roles[index].sub_modules, (e: any) => {
            return e.name == val1.path;
          }, 0);
          console.log(index1, 'index1');

          if (index1 >= 0) {
            val1.isSelected = true;
          }

        });
      }
    });
  }

  patchData(data) {
    this.form.patchValue({
      email: data.email,
      password: data.password,
      name: data.name
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.savedData) {
        obj._id = this.savedData._id;
      }

      let roles: any = [];
      this.roles.forEach((val) => {
        if (val.isSelected) {
          let sub_modules: any = [];
          val?.children?.forEach((val1) => {
            if (val1.isSelected) {
              sub_modules.push({
                name: val1.id,
                permissions: ['read', 'write', 'delete', 'block', 'update']
              });
            }
          });
          roles.push({
            name: val.id,
            type: val?.children?.length ? 'SUB' : 'MAIN',
            sub_modules,
            permissions: ['read', 'write', 'delete', 'block', 'update']
          });
        }
      });

      if (!roles?.length) {
        this.message.toast('error', 'Please select at least 1 option');
        return;
      } else {
        obj.roles = roles;
      }

      // roles : Joi.array().items({
      //
      //   name : Joi.string().required().valid("users_profiles","customer_management","recycle_bin","properties","controle_management","accounts","content_management","profile"),
      //   type : Joi.string().required().valid("MAIN","SUB"),
      //   sub_modules : Joi.array().items(Joi.object().keys({
      //     name: Joi.string().optional().valid("users_profiles_owners","users_profiles_agents","users_profiles_members","users_profiles_developers","customer_management_leads","property_category","property_commission","property_create","property_list","property_banners","controle_management_settings","controle_management_peroperty_pupose","controle_management_reject_reason","controle_management_property_budgets","accounts_advanced","accounts_pending","accounts_history","content_management_privacy","content_management_terms_condition","content_management_about","profile_update","profile_change_password","profile_logout"),
      //     permissions: Joi.array().optional().description("['read','write','delete','block','update']"),
      //   })).description("[{ name : '',permissions : [''] }]"),
      //   permissions: Joi.array().optional().description("['read','write','delete','block','update']"),
      // })
      //
      this.http.postData(ApiUrl.add_edit_roles, obj).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);
        this.commonService.goBack();
      }, () => {
      });

    } else {
      this.showError = true;
    }
  }

  clickMain(data) {
    console.log(data);

    data?.children?.forEach((val) => {
      val.isSelected = data.isSelected;
    });
  }

}



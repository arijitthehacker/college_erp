import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';
import { CountryISO } from 'ngx-intl-tel-input';
import { CONSTANT } from '../../../core/constant';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-customer-lead.component.html'
})
export class AddCustomerLeadComponent implements OnInit {

  showError = false;
  CountryISO = CountryISO;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  properties: any = [];
  members: any = [];
  agents: any = [];
  purposes: any = [];
  budgets: any = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: '_id',
    // textField: 'name',
    textField: 'fullName',
    noDataAvailablePlaceholderText: 'No member available',
    noFilteredDataAvailablePlaceholderText: 'No member available',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  dropdownSettings1: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: '_id',
    textField: 'name',
    maxHeight: 140,
    noDataAvailablePlaceholderText: 'No project available',
    noFilteredDataAvailablePlaceholderText: 'No project available',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.getPurposes();
    this.getBudgets();
    this.getProperties();
    this.getMembers();
    this.getAgents();
  }

  makeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CONSTANT.email_pattern)]],
      name: ['', Validators.required],
      age: ['', Validators.required],
      peroperty_id: ['', Validators.required],
      // agent_id: ['', Validators.required],
      gender: ['', Validators.required],
      note: [''],
      budget_id: ['', Validators.required],
      member_id: ['', Validators.required],
      pupose_id: ['', Validators.required],
      peropert_location: ['', Validators.required],
      phone_number: ['', [Validators.required]]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    console.log(data, 'datadatadata');
    this.form.patchValue({
      email: data.email,
      peroperty_id: data.peroperty_id?._id,
      peropert_location: data.peropert_location,
      pupose_id: data.pupose_id?._id,
      gender: data.gender,
      budget_id: data.budget_id?._id,
      // member_id: data.member_id,
      // agent_id: data.agent_id,
      note: data.note || '',
      age: data.age,
      name: data.name,
      phone_number: data.phone_number
    });

  }

  getProperties() {
    this.http.getData(ApiUrl.list_properties, {is_pagination: false}).subscribe(res => {
      this.properties = res.data.data;

      this.properties?.forEach((val, key) => {
        if (this.modalData) {
          if (val?._id === this.modalData?.peroperty_id?._id) {
            this.form.controls.peroperty_id.patchValue([this.properties[key]]);
            console.log(this.form.value.peroperty_id);
          }
        }
      });

    });
  }

  getMembers() {
    this.http.getData(ApiUrl.list_members, {is_pagination: false}).subscribe(res => {
      this.members = res.data.data;

      this.members.forEach((val, key) => {
        val.fullName = `${ val.name }, ${ val.user_name }`;
        if (this.modalData) {
          if (val?._id === this.modalData?.member_id?._id) {
            this.form.controls.member_id.patchValue([this.members[key]]);
            console.log(this.form.value.member_id);
          }
        }
      });

    });
  }

  getAgents() {
    this.http.getData(ApiUrl.list_agents, {is_pagination: false}).subscribe(res => {
      this.agents = res.data.data;
    });
  }

  getPurposes() {
    this.http.getData(ApiUrl.list_property_purpose, {is_pagination: false}).subscribe(res => {
      this.purposes = res.data.data;
    });
  }

  getBudgets() {
    this.http.getData(ApiUrl.list_property_budgets, {is_pagination: false}).subscribe(res => {
      this.budgets = res.data.data;
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      obj.iso_code = obj.phone_number.countryCode;
      obj.country_code = obj.phone_number.dialCode;
      obj.phone_number = obj.phone_number.number;
      obj.member_id = obj.member_id[0]._id;
      obj.peroperty_id = obj.peroperty_id[0]._id;

      this.http.postData(ApiUrl.add_customer_request, obj).subscribe(() => {
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



import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUrl } from '../../core/apiUrl';
import { ConstMsg } from '../../core/ConstMsg';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Currencies } from '../../core/constant';

@Component({
  selector: 'app-accounts',
  templateUrl: './add-new-property.component.html'
})
export class AddNewPropertyComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true
  };
  allData: any = [];
  date = '';
  search = '';
  pagination = new PaginationControls();
  selectedTab = 1;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  form5: FormGroup;
  form6: FormGroup;
  modalData: any;
  show1Error = false;
  show2Error = false;
  show3Error = false;
  show4Error = false;
  show5Error = false;
  show6Error = false;
  images: any = [];
  currencyList: any = Currencies;
  addresses: any = [];
  id;
  savedData: any;

  categories: any = [];
  developers: any = [];

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              public router: Router, public lightbox: Lightbox,
              public fb: FormBuilder, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('savedData')) {
      this.modalData = localStorage.getItem('savedData');
      this.savedData = localStorage.getItem('savedData');
    }
    this.id = this.activatedRoute.snapshot.queryParams.id;
    if (this.id) {
      this.getData();
    } else {
      this.createForms();
    }
  }

  getData() {
    let obj: any = {
      _id: this.id
    };
    this.http.getData(ApiUrl.list_properties, obj).subscribe(res => {
      this.modalData = res.data.data[0];
      this.createForms();
    });

  }

  createForms() {
    this.makeForm1();
    this.makeForm2();
    this.makeForm3();
    this.makeForm4();
    this.makeForm5();
    this.makeForm6();
    this.categoryList();
    this.devsList();

  }

  clickTab(flag) {
    if (this.id || flag == 1) {
      this.selectedTab = flag;
      switch (flag) {
        case 2:
          this.getAddress();
          break;
      }
    }
  }

  getAddress() {
    let obj: any = {
      property_id: this.id
    };
    this.http.getData(ApiUrl.list_property_address, obj).subscribe(res => {
      this.addresses = res.data.data;
    });
  }

  makeForm1() {
    this.form1 = this.fb.group({
      category_id: ['', Validators.required],
      is_featured: [false, Validators.required],
      developer_id: ['', Validators.required],
      peropert_type: ['', Validators.required],
      tensure: ['', Validators.required],
      category_type: [''],
      completion_year: ['', Validators.required],
      status: ['', Validators.required],
      name: ['', Validators.required]
    });

    if (this.modalData) {
      this.form1.patchValue({
        category_id: this.modalData.category_id,
        is_featured: this.modalData.is_featured,
        developer_id: this.modalData.developer_id._id,
        category_type: this.modalData.category_type,
        completion_year: this.modalData.completion_year,
        peropert_type: this.modalData.peropert_type,
        status: this.modalData.status,
        tensure: this.modalData.tensure,
        name: this.modalData.name
      });
    }

  }

  form1Submit() {
    if (this.form1.valid) {
      const obj = JSON.parse(JSON.stringify(this.form1.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      this.http.postData(ApiUrl.add_edit_peroperties, obj).subscribe(res => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.id = res.data._id;
        this.router.navigate([], {
          queryParams: {id: this.id},
          queryParamsHandling: 'merge'
        });
        this.getData();

      }, () => {
      });
    } else {
      this.show1Error = true;
    }
  }

  makeForm2() {
    this.form2 = this.fb.group({
      lng: ['', Validators.required],
      name: ['', Validators.required],
      lat: ['', Validators.required]
    });
    if (this.modalData) {
      this.form2.patchValue({
        lng: this.modalData.location.coordinates[0],
        name: this.modalData.name,
        lat: this.modalData.location.coordinates[1]
      });
    }

  }

  form2Submit() {
    if (this.form2.valid) {
      const obj = JSON.parse(JSON.stringify(this.form2.value));
      if (this.modalData) {
        obj[`property_id`] = this.modalData._id;
      }

      this.http.postData(ApiUrl.add_edit_peroperty_address, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.form2.reset();
        this.getAddress();

      }, () => {
      });
    } else {
      this.show3Error = true;
    }
  }

  makeForm3() {
    this.form3 = this.fb.group({
      min_bathroom: ['', Validators.required],
      max_bathroom: [0],
      min_area_size: ['', Validators.required],
      max_area_size: [0],
      min_bedroom: ['', Validators.required],
      max_bedroom: [0],
      area_size_type: ['', Validators.required]
    });
    if (this.modalData) {
      this.form3.patchValue({
        area_size_type: this.modalData.area_size_type,
        min_bedroom: this.modalData.min_bedroom,
        max_bedroom: this.modalData.max_bedroom,
        min_area_size: this.modalData.min_area_size,
        max_area_size: this.modalData.max_area_size,
        max_bathroom: this.modalData.max_bathroom,
        min_bathroom: this.modalData.min_bathroom
      });
    }

  }

  form3Submit() {
    if (this.form3.valid) {
      const obj = JSON.parse(JSON.stringify(this.form3.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      if (this.form3?.value?.max_bedroom) {
        if (parseInt(this.form3?.value?.min_bedroom, 10) > parseInt(this.form3?.value?.max_bedroom, 10)) {
          this.message.toast('error', 'Max bedroom should be greater than or equal to start price');
          return;
        }
      } else {
        obj.max_bedroom = 0;
      }
      if (this.form3?.value?.max_area_size) {
        if (parseInt(this.form3?.value?.min_area_size, 10) > parseInt(this.form3?.value?.max_area_size, 10)) {
          this.message.toast('error', 'Max area size should be greater than or equal to min area size');
          return;
        }
      } else {
        obj.min_area_size = 0;
      }
      this.http.postData(ApiUrl.add_peroperties_step_3, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
      }, () => {
      });
    } else {
      this.show3Error = true;
    }
  }

  makeForm4() {
    this.form4 = this.fb.group({
      currency: ['', Validators.required],
      start_price: [null, Validators.required],
      end_price: [null],
      min_member_commision: ['', Validators.required],
      max_member_commision: [0],
      min_agent_commision: ['', Validators.required],
      max_agent_commision: [0],
      min_group_owner_commision: ['', Validators.required],
      max_group_owner_commision: [0],
      total_units: ['', Validators.required]
    });

    if (this.modalData) {
      this.form4.patchValue({
        currency: this.modalData.currency,
        start_price: this.modalData.start_price,
        end_price: this.modalData.end_price,
        total_units: this.modalData.total_units,
        min_agent_commision: this.modalData.min_agent_commision,
        min_member_commision: this.modalData.min_member_commision,
        min_group_owner_commision: this.modalData.min_group_owner_commision,
        member_commision: this.modalData.member_commision,
        max_member_commision: this.modalData.max_member_commision,
        max_agent_commision: this.modalData.max_agent_commision,
        agent_commision: this.modalData.agent_commision,
        group_owner_commision: this.modalData.group_owner_commision,
        max_group_owner_commision: this.modalData.max_group_owner_commision
      });
    }

  }

  form4Submit() {
    if (this.form4.valid) {
      const obj = JSON.parse(JSON.stringify(this.form4.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      if (this.form4?.value?.end_price) {
        if (parseInt(this.form4?.value?.start_price, 10) > parseInt(this.form4?.value?.end_price, 10)) {
          this.message.toast('error', 'End price should be greater than or equal to start price');
          return;
        }
      } else {
        obj.end_price = 0;
      }

      if (this.form4?.value?.max_member_commision) {
        if (parseInt(this.form4?.value?.min_member_commision, 10) > parseInt(this.form4?.value?.max_member_commision, 10)) {
          this.message.toast('error', 'Max member commission should be greater than or equal to start price');
          return;
        }
      } else {
        obj.max_member_commision = 0;
      }

      if (this.form4?.value?.max_agent_commision) {
        if (parseInt(this.form4?.value?.min_agent_commision, 10) > parseInt(this.form4?.value?.max_agent_commision, 10)) {
          this.message.toast('error', 'Max agent commission should be greater than or equal to min agent commission');
          return;
        }
      } else {
        obj.max_agent_commision = 0;
      }
      if (this.form4?.value?.max_group_owner_commision) {
        if (parseInt(this.form4?.value?.min_group_owner_commision, 10) > parseInt(this.form4?.value?.max_group_owner_commision, 10)) {
          this.message.toast('error', 'Max group owner commission should be greater than or equal to min group owner commission');
          return;
        }
      } else {
        obj.max_group_owner_commision = 0;
      }

      this.http.postData(ApiUrl.add_peroperties_step_4, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
      }, () => {
      });
    } else {
      this.show4Error = true;
    }
  }

  makeForm5() {
    this.form5 = this.fb.group({
      descriptuon: ['', Validators.required]
    });

    if (this.modalData) {
      this.form5.patchValue({
        descriptuon: this.modalData.descriptuon
      });
    }

  }

  form5Submit() {
    if (this.form5.valid) {
      const obj = JSON.parse(JSON.stringify(this.form5.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      this.http.postData(ApiUrl.add_peroperties_step_5, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
      }, () => {
      });
    } else {
      this.show5Error = true;
    }
  }

  makeForm6() {
    this.form6 = this.fb.group({
      brochure: ['', Validators.required],
      cover_image: ['', Validators.required]
    });

    if (this.modalData) {
      this.form6.patchValue({
        brochure: this.modalData.brochure,
        cover_image: this.modalData.cover_image
      });
      this.images = this.modalData.images;
    }
  }

  form6Submit() {
    if (this.form6.valid) {
      const obj = JSON.parse(JSON.stringify(this.form6.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }

      if (this.images.length) {
        obj.images = this.images;
      } else {
        return;
      }

      this.http.postData(ApiUrl.add_peroperties_step_6, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
      }, () => {
      });
    } else {
      this.show6Error = true;
    }
  }

  selectImage(event: any, id, flag) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      if (flag == 1) {
        this.form6.controls.cover_image.patchValue(response.data.original);
      } else if (flag == 3) {
        this.form6.controls.brochure.patchValue(response.data.original);
      } else {
        this.images.push(response.data.original);
      }
    }, () => {
    });
  }

  removeImage(id, flag) {
    if (flag === 3) {
      this.form6.controls.brochure.patchValue('');
    } else {
      this.form6.controls.cover_image.patchValue('');
    }
  }

  removeImageFromArr(index) {
    this.images.splice(index, 1);
  }

  blockUnblock(data: any) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.managed_peroperty_address, obj).subscribe(() => {
      this.commonService.checkBlockUnblock(data);
    }, () => {
    });
  }

  deleteData(data: any) {
    this.message.confirm(`delete this address`).then(res => {
      if (res.isConfirmed) {
        const obj: any = {
          _id: data._id,
          is_deleted: true
        };
        this.http.putData(ApiUrl.managed_peroperty_address, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getAddress();
        }, () => {
        });
      }
    });
  }

  categoryList() {
    let obj = {
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_peroperty_categories, obj, true).subscribe(res => {
      this.categories = res.data.data;
    });
  }

  devsList() {
    let obj = {
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_developers, obj, true).subscribe(res => {
      this.developers = res.data.data;
    });
  }

}

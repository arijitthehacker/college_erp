import {Component, OnInit} from '@angular/core';
import {PaginationControls} from 'src/app/shared/models/pagination-model';
import {HttpService} from 'src/app/services/http/http.service';
import {CommonService} from 'src/app/services/commonService/common.service';
import {MessageService} from 'src/app/services/message/message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Lightbox} from 'ngx-lightbox';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiUrl} from '../../core/apiUrl';
import {ConstMsg} from '../../core/ConstMsg';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Currencies} from '../../core/constant';

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
  addressData: any = {};
  states: any = [];
  cities: any = [];
  categories: any = [];
  developers: any = [];
  commissions: any = [];
  progress: any = 1;
  isEdit = false;

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
    this.isEdit = this.activatedRoute.snapshot.queryParams.isEdit;
    if (this.id) {
      this.getData();
      this.getProgress();
    } else {
      this.createForms();
    }
    this.getDropdownData();
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

  getProgress() {
    let obj: any = {
      _id: this.id
    };
    this.http.getData(ApiUrl.list_properties, obj).subscribe(res => {
      this.progress = parseInt(res.data.data[0].progress);
    });
  }

  getDropdownData() {
    this.categoryList();
    this.getStateData();

    this.devsList();
    this.commissionList();
    setTimeout(() => {
      this.getCityData();
    }, 1000);
  }

  createForms() {
    this.makeForm1();
    this.makeForm2();
    this.makeForm3();
    this.makeForm4();
    this.makeForm5();
    this.makeForm6();

  }

  gotoPrev(flag) {
    this.selectedTab = flag;
  }

  resetAddressData() {
    this.form2.patchValue({
      state_id: this.modalData.state_id?._id || '',
      // name: this.modalData.address,
      city_id: this.modalData.city_id?._id || ''
      // lng: (this.modalData.location?.coordinates[0] != 1) ? this.modalData.location?.coordinates[0] : '',
      // lat: (this.modalData.location?.coordinates[1] != 0) ? this.modalData.location?.coordinates[1] : ''
    });

    this.getCityData();

  }

  gotoNext(flag) {
    if (flag === 3) {
      if (this.form2.valid) {
        this.form2Submit();
      } else {
        this.form2Submit();
        return;
      }
    }
    this.selectedTab = flag;
  }

  clickTab(flag) {
    if (this.id || flag == 1) {
      if ((this.progress) + 1 >= flag) {
        this.selectedTab = flag;
      }
      switch (flag) {
        case 2:
          // this.getStateData();
          // this.getCityData();
          // this.getAddress();
          break;
      }
    } else {
      this.form1Submit();
    }
  }

  makeForm1() {
    this.form1 = this.fb.group({
      category_id: ['', Validators.required],
      is_featured: [false, Validators.required],
      developer_id: ['', Validators.required],
      peropert_type: ['', Validators.required],
      tensure: ['', Validators.required],
      se_no: [null],
      category_type: [''],
      completion_year: ['', Validators.required],
      status: ['', Validators.required],
      name: ['', Validators.required]
    });

    if (this.modalData) {
      this.form1.patchValue({
        category_id: this.modalData?.category_id?._id || this.modalData?.category_id,
        is_featured: this.modalData.is_featured,
        developer_id: this.modalData.developer_id._id,
        category_type: this.modalData.category_type,
        se_no: parseInt(this.modalData.se_no) || null,
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

      if (!obj.se_no) {
        obj.se_no = null;
      }

      this.http.postData(ApiUrl.add_edit_peroperties, obj).subscribe(res => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.id = res.data._id;

        // if(!this.isEdit) {
        this.router.navigate([], {
          queryParams: {id: this.id},
          queryParamsHandling: 'merge'
        });
        this.getData();
        // this.getProgress();
        // }

        this.selectedTab = 2;
      }, () => {
      });
    } else {
      this.show1Error = true;
    }
  }

  makeForm2() {
    this.form2 = this.fb.group({
      state_id: ['', Validators.required],
      city_id: ['', Validators.required],
      lng: ['', Validators.required],
      name: ['', Validators.required],
      lat: ['', Validators.required]
    });
    if (this.modalData) {
      this.form2.patchValue({
        state_id: this.modalData.state_id?._id || '',
        name: this.modalData.address,
        city_id: this.modalData.city_id?._id || '',
        lng: (this.modalData.location?.coordinates[0] != 1) ? this.modalData.location?.coordinates[0] : '',
        lat: (this.modalData.location?.coordinates[1] != 0) ? this.modalData.location?.coordinates[1] : ''
      });
    }
  }

  getStateData() {
    this.http.getData(ApiUrl.list_states).subscribe(res => {
      this.states = res.data.data;
      console.log('2222222222222');
      this.getCityData();
    });
  }

  getCityData() {
    if (this.form2?.value?.state_id) {
      this.http.getData(ApiUrl.list_cities, {state_id: this.form2.value.state_id}).subscribe(res => {
        this.cities = res.data.data;
      });
      // this.form2.controls.city_id.patchValue('');
    }
  }

  form2Submit() {
    if (this.form2.valid) {
      const obj = JSON.parse(JSON.stringify(this.form2.value));
      if (this.modalData) {
        obj[`property_id`] = this.modalData._id;
      }
      if (this.addressData) {
        obj[`_id`] = this.addressData._id;
      }
      this.http.postData(ApiUrl.add_edit_peroperty_address, obj).subscribe(res => {
        this.addressData = res.data;
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        // this.form2.reset();
        // this.getAddress();
        // this.getData();
        this.getProgress();

      }, () => {
      });
    } else {
      this.show2Error = true;
    }
  }

  makeForm3() {
    this.form3 = this.fb.group({
      min_bathroom: ['', Validators.required],
      max_bathroom: [],
      min_area_size: ['', Validators.required],
      max_area_size: [],
      min_bedroom: ['', Validators.required],
      max_bedroom: [],
      area_size_type: ['', Validators.required]
    });
    if (this.modalData && this.modalData.area_size_type) {
      this.form3.patchValue({
        area_size_type: this.modalData.area_size_type,
        min_bedroom: this.modalData.min_bedroom,
        max_bedroom: this.setEmptyValue(2, this.modalData.max_bedroom),
        min_area_size: this.modalData.min_area_size,
        max_area_size: this.setEmptyValue(1, this.modalData.max_area_size),
        max_bathroom: this.setEmptyValue(2, this.modalData.max_bathroom),
        min_bathroom: this.modalData.min_bathroom
      });
    }
  }

  setEmptyValue(flag, key) {
    if (flag === 1) {
      return (key === 9999 || key === 0) ? '' : key;
    } else {
      return (key === 999 || key === 0) ? '' : key;
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
        // delete obj.max_bedroom = 0;
        obj.max_bedroom = 0;
      }
      if (this.form3?.value?.max_area_size) {
        if (parseInt(this.form3?.value?.min_area_size, 10) > parseInt(this.form3?.value?.max_area_size, 10)) {
          this.message.toast('error', 'Max area size should be greater than or equal to min area size');
          return;
        }
      } else {
        obj.max_area_size = 0;
        // delete obj.max_area_size;
      }
      if (this.form3?.value?.max_bathroom) {
        if (parseInt(this.form3?.value?.min_bathroom, 10) > parseInt(this.form3?.value?.max_bathroom, 10)) {
          this.message.toast('error', 'Max bathroom should be greater than or equal to min bathroom');
          return;
        }
      } else {
        // delete obj.max_bathroom;
        obj.max_bathroom = 0;
      }
      this.http.postData(ApiUrl.add_peroperties_step_3, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.selectedTab = 4;
        this.getProgress();
      }, () => {
      });
    } else {
      this.show3Error = true;
    }
  }

  makeForm4() {
    this.form4 = this.fb.group({
      currency: ['MYR', Validators.required],
      comission_id: ['', Validators.required],
      start_price: [null, Validators.required],
      end_price: [null],
      total_units: ['', Validators.required]
    });

    if (this.modalData && this.modalData.total_units) {
      this.form4.patchValue({
        start_price: this.modalData.start_price,
        // end_price: this.setEmptyValue(this.modalData.end_price),
        end_price: this.setEmptyValue(2,this.modalData.end_price),
        comission_id: this.modalData?.comission_id?._id || '',
        total_units: this.modalData.total_units
      });

      if (this.modalData.currency) {
        this.currencyList.forEach((val) => {
          if (val.name == this.modalData.currency) {
            this.form4.patchValue({
              currency: val.cc
            });
          }
        });
      }
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
        // delete obj.end_price;
      }

      this.currencyList.forEach((val) => {
        if (val.cc == this.form4.value.currency) {
          obj.currency = JSON.parse(JSON.stringify(val.name));
          obj.currency_code = val.symbol;
        }
      });
      this.http.postData(ApiUrl.add_peroperties_step_4, obj).subscribe(() => {
        this.message.toast('success',
          this.modalData ? ConstMsg.updatedSuccess : ConstMsg.addedSuccess);
        this.selectedTab = 5;
        this.getProgress();
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
        this.getProgress();
        this.selectedTab = 6;
      }, () => {
      });
    } else {
      this.show5Error = true;
    }
  }

  makeForm6() {
    this.form6 = this.fb.group({
      brochure: ['', Validators.required],
      // video: ['', Validators.required],
      cover_image: ['', Validators.required]
    });

    if (this.modalData) {
      this.form6.patchValue({
        brochure: this.modalData.brochure,
        // video: this.modalData.video,
        cover_image: this.modalData.cover_image
      });
      this.images = this.modalData.images;
    }
  }

  form6Submit(isPublish?) {
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
        this.getProgress();
        if (isPublish) {
          this.publishApi();
        }
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
        // } else if (flag == 6) {
        //   this.form6.controls.video.patchValue(response.data.original);
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
      // } else if (flag === 6) {
      //   this.form6.controls.video.patchValue('');
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
          // this.getAddress();
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
      // this.getAddress();
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

  commissionList() {
    let obj = {
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_comission, obj, true).subscribe(res => {
      this.commissions = res.data.data;
    });
  }

  publishApi() {
    let obj = {
      publish: true,
      _id: this.id
    };

    this.http.putData(ApiUrl.managed_peroperties, obj).subscribe(res => {
      this.message.toast('success', 'Property published successfully!');
      this.router.navigate(['/properties']);
    });
  }

}

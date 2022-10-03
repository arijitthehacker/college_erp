import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-property.component.html'
})
export class AddPropertyComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  categories: any = [];
  images: any = [];

  editorConfig: AngularEditorConfig = {
    editable: true
  };

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.categoryList();
  }

  makeForm() {
    this.form = this.fb.group({
      category_id: ['', Validators.required],
      descriptuon: ['', Validators.required],
      cover_image: ['', Validators.required],
      brochure: ['', Validators.required],
      currency: ['', Validators.required],
      total_units: ['', Validators.required],
      min_bedroom: ['', Validators.required],
      max_bedroom: [0],
      min_member_commision: ['', Validators.required],
      max_member_commision: [0],
      peropert_type: ['', Validators.required],
      builder_name: ['', Validators.required],
      min_bathroom: ['', Validators.required],
      max_bathroom: [0],
      min_area_size: ['', Validators.required],
      max_area_size: [0],
      tensure: ['', Validators.required],
      category_type: [''],
      min_agent_commision: ['', Validators.required],
      max_agent_commision: [0],
      min_group_owner_commision: ['', Validators.required],
      max_group_owner_commision: [0],
      completion_year: ['', Validators.required],
      start_price: [null, Validators.required],
      status: ['', Validators.required],
      end_price: [null],
      area_size_type: ['', Validators.required],
      address: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      name: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      category_id: data.category_id,
      lat: data.lat,
      lng: data.lng,
      address: data.address,
      min_agent_commision: data.min_agent_commision,
      min_member_commision: data.min_member_commision,
      builder_name: data.builder_name,
      member_commision: data.member_commision,
      category_type: data.category_type,
      min_group_owner_commision: data.min_group_owner_commision,
      descriptuon: data.descriptuon,
      completion_year: data.completion_year,
      peropert_type: data.peropert_type,
      currency: data.currency,
      max_member_commision: data.max_member_commision,
      max_agent_commision: data.max_agent_commision,
      max_group_owner_commision: data.max_group_owner_commision,
      total_units: data.total_units,
      area_size_type: data.area_size_type,
      start_price: data.start_price,
      end_price: data.end_price,
      agent_commision: data.agent_commision,
      group_owner_commision: data.group_owner_commision,
      status: data.status,
      cover_image: data.cover_image,
      tensure: data.tensure,
      min_bedroom: data.min_bedroom,
      max_bedroom: data.max_bedroom,
      brochure: data.brochure,
      min_area_size: data.min_area_size,
      max_area_size: data.max_area_size,
      max_bathroom: data.max_bathroom,
      min_bathroom: data.min_bathroom,
      name: data.name
    });

    this.images = data.images;

    if (data.location.coordinates) {
      this.form.patchValue({
        lat: data.location.coordinates[1],
        lng: data.location.coordinates[0]
      });
    }
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      if (this.images.length) {
        obj.images = this.images;
      } else {
        return;
      }
      if (this.form?.value?.end_price) {
        if (parseInt(this.form?.value?.start_price, 10) > parseInt(this.form?.value?.end_price, 10)) {
          this.message.toast('error', 'End price should be greater than or equal to start price');
          return;
        }
      } else {
        obj.end_price = 0;
      }

      if (this.form?.value?.max_member_commision) {
        if (parseInt(this.form?.value?.min_member_commision, 10) > parseInt(this.form?.value?.max_member_commision, 10)) {
          this.message.toast('error', 'Max member commission should be greater than or equal to start price');
          return;
        }
      } else {
        obj.max_member_commision = 0;
      }
      if (this.form?.value?.max_bedroom) {
        if (parseInt(this.form?.value?.min_bedroom, 10) > parseInt(this.form?.value?.max_bedroom, 10)) {
          this.message.toast('error', 'Max bedroom should be greater than or equal to start price');
          return;
        }
      } else {
        obj.max_bedroom = 0;
      }

      this.http.postData(ApiUrl.add_edit_peroperties, obj).subscribe(() => {
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

  categoryList() {
    let obj = {
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_peroperty_categories, obj, true).subscribe(res => {
      this.categories = res.data.data;
    });
  }

  selectImage(event: any, id, flag) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      if (flag == 1) {
        this.form.controls.cover_image.patchValue(response.data.original);
      } else if (flag == 3) {
        this.form.controls.brochure.patchValue(response.data.original);
      } else {
        this.images.push(response.data.original);
      }
    }, () => {
    });
  }

  removeImage(id, flag) {
    if (flag === 3) {
      this.form.controls.brochure.patchValue('');
    } else {
      this.form.controls.cover_image.patchValue('');
    }
  }

  removeImageFromArr(index) {
    this.images.splice(index, 1);
  }

}



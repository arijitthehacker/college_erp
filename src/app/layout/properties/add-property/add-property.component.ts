import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { CommonService } from '../../../services/commonService/common.service';

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
      bedroom: ['', Validators.required],
      bathroom: ['', Validators.required],
      area_size: ['', Validators.required],
      tensure: ['', Validators.required],
      discount_type: ['', Validators.required],
      discount: ['', Validators.required],
      completion_year: ['', Validators.required],
      price: ['', Validators.required],
      is_featured: [true, Validators.required],
      area_size_type: ['', Validators.required],
      name: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      category_id: data.category_id,
      discount_type: data.discount_type,
      is_featured: data.is_featured,
      descriptuon: data.descriptuon,
      completion_year: data.completion_year,
      area_size_type: data.area_size_type,
      price: data.price,
      discount: data.discount,
      cover_image: data.cover_image,
      tensure: data.tensure,
      bedroom: data.bedroom,
      area_size: data.area_size,
      bathroom: data.bathroom,
      name: data.name
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      if (this.images.length) {
        obj.images = this.images;
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
    }, () => {
    });

  }

  selectImage(event: any, id, flag) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      if (flag == 1) {
        console.log('am in if');
        this.form.controls.cover_image.patchValue(response.data.original);
      } else {
        console.log('am in else');
        this.images.push(response.data.original);
      }
    }, () => {
    });
  }

  removeImage(id) {
    this.form.controls.image.patchValue(id);
  }

  removeImageFromArr(index) {
    this.images.splice(index, 1);
  }

}



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
    editable: true,
    // spellcheck: true,
    // height: 'auto',
    // minHeight: '0',
    // maxHeight: 'auto',
    // width: 'auto',
    // minWidth: '0',
    // translate: 'yes',
    // enableToolbar: true,
    // showToolbar: true,
    // placeholder: 'Enter text here...',
    // defaultParagraphSeparator: '',
    // defaultFontName: '',
    // defaultFontSize: '',
    // fonts: [
    //   {class: 'arial', name: 'Arial'},
    //   {class: 'times-new-roman', name: 'Times New Roman'},
    //   {class: 'calibri', name: 'Calibri'},
    //   {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    // ],
    // customClasses: [
    //   {
    //     name: 'quote',
    //     class: 'quote',
    //   },
    //   {
    //     name: 'redText',
    //     class: 'redText'
    //   },
    //   {
    //     name: 'titleText',
    //     class: 'titleText',
    //     tag: 'h1',
    //   },
    // ],
    // uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
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
      brochure: [''],
      total_units: ['', Validators.required],
      bedroom: ['', Validators.required],
      member_commision: ['', Validators.required],
      peropert_type: ['', Validators.required],
      builder_name: ['', Validators.required],
      bathroom: ['', Validators.required],
      area_size: ['', Validators.required],
      tensure: ['', Validators.required],
      category_type: [''],
      commision_in_percentage: ['', Validators.required],
      completion_year: ['', Validators.required],
      start_price: ['', Validators.required],
      status: ['', Validators.required],
      end_price: ['', Validators.required],
      // is_featured: [true, Validators.required],
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
      builder_name: data.builder_name,
      member_commision: data.member_commision,
      category_type: data.category_type,
      // is_featured: data.is_featured,
      descriptuon: data.descriptuon,
      completion_year: data.completion_year,
      peropert_type: data.peropert_type,
      total_units: data.total_units,
      area_size_type: data.area_size_type,
      start_price: data.start_price,
      end_price: data.end_price,
      commision_in_percentage: data.commision_in_percentage,
      status: data.status,
      cover_image: data.cover_image,
      tensure: data.tensure,
      bedroom: data.bedroom,
      brochure: data.brochure,
      area_size: data.area_size,
      bathroom: data.bathroom,
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

    if (parseInt(this.form?.value?.start_price, 10) > parseInt(this.form?.value?.end_price, 10)) {
      this.message.toast('error', 'End price should be greater than or equal to start price');
      return;
    }

    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      if (this.images.length) {
        obj.images = this.images;
      } else {
        //   this.message.toast('error', 'Please add atleast 1 image');
        return;
      }

      if (this.form?.value?.start_price > this.form?.value?.end_price) {
        this.message.toast('error', 'Start price should be less than or equal to end price');
        return;
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
        this.form.controls.cover_image.patchValue(response.data.original);
      } else if (flag == 3) {
        console.log('am in else');
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



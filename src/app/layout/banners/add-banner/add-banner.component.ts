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
  templateUrl: './add-banner.component.html'
})
export class AddBannerComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  properties: any = [];

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.getProperties();
  }

  getProperties() {
    this.http.getData(ApiUrl.list_properties, {is_pagination: false}).subscribe(res => {
      this.properties = res.data.data;
    });
  }

  makeForm() {
    this.form = this.fb.group({
      image: ['', Validators.required],
      property_id: ['', Validators.required],
      se_no: ['', Validators.required]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      image: data.image,
      property_id: data.property_id._id,
      se_no: data.se_no
    });
  }

  formSubmit() {
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      this.http.postData(ApiUrl.add_edit_banners, obj).subscribe(() => {
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

  selectImage(event: any, id) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
      this.form.controls.image.patchValue(response.data.original);
    }, () => {
    });
  }

  removeImage(id) {
    document.getElementById(id)[`value`] = '';
    this.form.controls.image.patchValue('');
  }

}



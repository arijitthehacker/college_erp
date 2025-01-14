import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'src/app/services/message/message.service';
import {ApiUrl} from 'src/app/core/apiUrl';
import {HttpService} from 'src/app/services/http/http.service';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ConstMsg} from 'src/app/core/ConstMsg';
import {CommonService} from '../../../services/commonService/common.service';
import {CountryISO} from 'ngx-intl-tel-input';
import {CONSTANT} from '../../../core/constant';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-founder.component.html'
})
export class AddFounderComponent implements OnInit {

  showError = false;
  showError1 = false;
  CountryISO = CountryISO;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  csvFile: any;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
               
  }

  ngOnInit() {
    this.makeForm();

    
  }

  // @HostListener('keydown', ['$event'])
  // onKeydown(event: KeyboardEvent) {
  //   if (event.key === '+' || event.key === '-') {
  //     event.preventDefault();
  //   }
  // }

  makeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(CONSTANT.email_pattern)]],
      phone_number: ['', [Validators.compose([Validators.required])]],
      bank_name: [''],
      image: [''],
      account_name: [''],
      account_number: [''],
      sort_code: [''],
      name: ['', [Validators.required]]
    });
    if (this.modalData) {
      this.patchData(this.modalData);
    }
  }

  patchData(data) {
    this.form.patchValue({
      bank_name: data.bank_name,
      sort_code: data.sort_code,
      account_number: data.account_number,
      account_name: data.account_name,
      email: data.email,
      image: data.image || '',
      name: data.name,
      phone_number: data.phone_number
    });
  }

  // csv_upload
// 
fileName:any
onFileChange(event: any) {
  const file = event.target.files[0];
  if (file && file.type === 'text/csv') {
    this.csvFile = file;
    console.log(this.csvFile,'..this.csvFilethis.csvFile')
  } else {
    alert('Please select a valid CSV file.');
  }
}


  selectImage() {
    const obj = {
      file:this.csvFile
    }
    this.http.uploadImageService(ApiUrl.csv_upload, obj).subscribe(response => {
      console.log(response)
      this.onClose.next(null);
      this.message.toast('success','Added Successfully');
      this.bsModalRef.hide();
    }, () => {
    });
  }

  removeImage(id) {
    document.getElementById(id)[`value`] = '';
    this.form.controls.image.patchValue('');
  }

  formSubmit() {
    // if (this.form.value.phone_number) {
    // } else {
    //   this.form.controls.phone_number.patchValue('');
    // }

    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      let apiUrl = ApiUrl.add_edit_group_owner;
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
        apiUrl = ApiUrl.add_edit_group_owner;
      }

      if (obj.phone_number) {
        obj.iso_code = obj.phone_number.countryCode;
        obj.country_code = obj.phone_number.dialCode;
        obj.phone_number = obj.phone_number.number;
      } else {
        this.form.patchValue({
          phone_number: ''
        });
        this.showError = true;
        this.showError1 = true;
        return;
      }

      if (!obj.image) {
        delete obj.image;
      }

      this.http.postData(apiUrl, obj).subscribe(() => {
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



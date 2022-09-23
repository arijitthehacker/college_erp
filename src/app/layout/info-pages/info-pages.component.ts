import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CommonService } from '../../services/commonService/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './info-pages.component.html'
})
export class InfoPagesComponent implements OnInit {

  showError = false;
  form: FormGroup;
  type;

  editorConfig: AngularEditorConfig = {
    editable: true
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
              public bsModalRef: BsModalRef, public commonService: CommonService, public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(res => {
      this.type = res.type;
      this.categoryList();
    });
  }

  ngOnInit() {
    this.makeForm();

  }

  makeForm() {
    this.form = this.fb.group({
      content: ['', Validators.required]
    });

  }

  patchData(data) {
    if (this.type === 'about') {
      this.form.controls.content.patchValue(data.about);
    }
    if (this.type === 'privacy') {
      this.form.controls.content.patchValue(data.policy_terms);
    }
    if (this.type === 'terms') {
      this.form.controls.content.patchValue(data.terms_conditions);
    }

  }

  formSubmit() {
    if (this.form.valid) {
      const obj: any = {};
      let apiUrl;
      if (this.type === 'about') {
        apiUrl = 'Admin/add_about';
        obj.about = this.form.value.content;
      }
      if (this.type === 'privacy') {
        apiUrl = 'Admin/add_poilcy_terms';
        obj.policy_terms = this.form.value.content;
      }

      if (this.type === 'terms') {
        apiUrl = 'Admin/add_terms_conditions';
        obj.terms_conditions = this.form.value.content;
      }

      this.http.postData(apiUrl, obj).subscribe(() => {
        this.message.toast('success', ConstMsg.updatedSuccess);
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

  categoryList() {
    let apiUrl = 'Admin/about_details';
    if (this.type === 'about') {
      apiUrl = 'Admin/about_details';
    }
    if (this.type === 'privacy') {
      apiUrl = 'Admin/list_policy_terms';
    }
    if (this.type === 'terms') {
      apiUrl = 'Admin/terms_conditions_details';
    }
    this.http.getData(apiUrl, {}).subscribe(res => {
      if (res.data) {
        this.patchData(res.data);
      }
    });
  }

}



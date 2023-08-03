import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './change-status.component.html'
})
export class ChangeStatusComponent implements OnInit {

  showError = false;
  form: FormGroup;
  Rejectform:FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  allData: any;
  modalRef?: BsModalRef;
  selectedStatus: any;
  selectedStatusId: any;
  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, private modalService: BsModalService, public commonService: CommonService) {
  }

  ngOnInit() {
    this.getData();
    this.makeForm();
  }

  openModal(template: TemplateRef<any>,index:any,status:any) {
    this.modalRef = this.modalService.show(template);
    this.selectedStatusId = this.allData[index]._id;
    this.selectedStatus = status
  }


  openRejectModal(template1: TemplateRef<any>,index:any,status:any) {
    this.modalRef = this.modalService.show(template1);
    this.selectedStatusId = this.allData[index]._id;
    this.selectedStatus = status
  }

  undoStatus(index:any){
    const obj = {
      _id:this.modalData._id,
      status_id:this.allData[index]._id
    }
    this.http.putData(ApiUrl.update_steps,obj).subscribe(() =>{
      this.message.toast('success', 'Status Updated Successfully!')
      this.getData();
    })
  }


 

  getData(){
    const obj = {
      _id:this.modalData._id
    }
    console.log(obj,'.....object')
    this.http.getData(ApiUrl.list_customer_request_details, obj).subscribe(res =>{
       console.log(res.data[0],'.....resss')
       this.allData = res.data[0].status
       console.log(this.allData,'.....rethis.allDatasss')

    })
  }

  makeForm() {
    this.form = this.fb.group({
      status_id: ['', Validators.required],
      status:['',Validators.required],
      image:[''],
      description:[''],
      reject_reason:['']
    });

  }


  submit(index?:any){
   if(!index){
      this.formSubmit();
   }else{
    this.updateStatus(index)
   }
  }

  formSubmit() {
    console.log(this.form.value)
    this.form.controls.status.setValue(this.selectedStatus)
    this.form.controls.status_id.setValue(this.selectedStatusId)
    if (this.form.valid) {
      const obj = {}
      obj['status_id'] = this.selectedStatusId,
      obj['status'] = this.selectedStatus,
      obj['description'] = this.form.value.description,
      obj['image'] = this.form.value.image,
      obj['_id'] = this.modalData._id
      obj['reject_reason'] = this.form.value.reject_reason

      if(obj['status'] == 'APPROVED'){
        delete obj['reject_reason']
      }


      if(this.form.value.image == ''){
        delete obj['image']
      }
      if(this.form.value.description == ''){
        delete obj['description']
      }


      if(obj['status'] == 'REJECTED'){
        delete obj['image'],
        delete obj['description']
      }

      this.http.putData(ApiUrl.manage_customer_status, obj).subscribe(() => {
        this.onClose.next(null);
        this.getData();
        if(obj['status'] == 'REJECTED'){
        this.message.toast('success', 'Rejected Successfully!');
        }else{
          this.message.toast('success', 'Assigned Successfully!');
        }
        this.modalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }


  updateStatus(index:any){
  
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



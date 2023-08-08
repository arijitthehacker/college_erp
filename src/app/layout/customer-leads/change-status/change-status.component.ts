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
 onClose: Subject<{}>;
  modalData: any;
  allData: any;
  modalRef?: BsModalRef;
  selectedStatus: any;
  selectedStatusId: any;
  indexSelected: any;
  RejectAllData: any;
  selected_reason: any;
  customReason: boolean = false;
  customRejected: any;
  imageValue: any;
  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, private modalService: BsModalService, public commonService: CommonService) {
  }

  ngOnInit() {
    this.getData();
    this.makeForm();
    this.getRejectReason();
    this.onClose = new Subject()
  }

  openModal(template: TemplateRef<any>,index:any,status:any) {
    this.form.controls.reject_reason.clearValidators();
    this.modalRef = this.modalService.show(template);
    this.selectedStatusId = this.allData[index]._id;
    this.selectedStatus = status
    this.indexSelected = index
    console.log(this.selectedStatus,'....this.selectedStatusthis.selectedStatus')
    if(index == 4 || index == 6){
      this.form.controls.image.setValidators([Validators.required])
    }else{
      this.form.controls.image.clearValidators();
    }
  }


  openRejectModal(template1: TemplateRef<any>,index:any,status:any) {
    this.form.controls.image.clearValidators();
    this.modalRef = this.modalService.show(template1);
    this.selectedStatusId = this.allData[index]._id;
    this.selectedStatus = status
    this.selectedReason(0)
    if(this.selectedStatus == 'REJECTED'){
      this.form.controls.reject_reason.setValidators([Validators.required])
    }else{
      this.form.controls.reject_reason.clearValidators();
    }
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



  StatusRemoveImage(index:any){
   const obj = {
    _id:this.modalData._id,
    status_id:this.allData[index]._id,
    is_delete_image:true
   }
   this.http.putData(ApiUrl.update_steps,obj).subscribe(() =>{
    this.message.toast('success', 'image removed Successfully!')
    this.getData();
  })
  }


  getRejectReason() {
    this.http.getData(ApiUrl.list_rejection_reason).subscribe(res => {
      this.RejectAllData = res.data.data;
      console.log(this.RejectAllData,'....this.RejectAllData')
         const filterarr =  this.RejectAllData.filter(item=>!item.is_blocked)
         this.customRejected = filterarr
    }, () => {
    });
  }

  
  selectedReason(index:any){
    this.customReason = false;
    console.log(index,'...index')
    this.selected_reason = this.RejectAllData[index].name
    console.log(this.selected_reason)
  }


  OtherReason(){
    this.customReason = true;
  }


  submit(index?:any){
   if(!index){
      this.formSubmit();
   }else{
    this.updateStatus(index)
   }
  }

  formSubmit() {
   
    this.form.controls.status.setValue(this.selectedStatus)
    this.form.controls.status_id.setValue(this.selectedStatusId)
   
    if(this.customReason == true){
     this.form.controls.reject_reason.setValue(this.form.value.reject_reason)
    }else{
     this.form.controls.reject_reason.setValue(this.selected_reason)
    }
  
  console.log(this.form.valid)
    if (this.form.valid) {
      const obj = {}
      obj['status_id'] = this.selectedStatusId,
      obj['status'] = this.selectedStatus,
      obj['description'] = this.form.value.description,
      obj['image'] = this.form.value.image,
      obj['_id'] = this.modalData._id

      if(this.customReason == true){
        obj['reject_reason'] = this.form.value.reject_reason
      }else{
        obj['reject_reason'] = this.selected_reason
      }

      if(obj['status'] == 'APPROVED'){
        delete obj['reject_reason']
      }


      if(this.form.value.image == '' || !this.form.value.image){
        delete obj['image']
      }
      if(this.form.value.description == '' || !this.form.value.description){
        delete obj['description']
      }


      if(obj['status'] == 'REJECTED'){
        delete obj['image'],
        delete obj['description']
      }

      this.http.putData(ApiUrl.manage_customer_status, obj).subscribe(() => {
        // this.onClose.next(null);
        this.getData(); 
        if(obj['status'] == 'REJECTED'){
        this.message.toast('success', 'Rejected Successfully!');
        }else{
          this.message.toast('success', 'Status update successfully!');
        }
        this.form.reset();
        this.modalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }


  updateStatus(index:any){
  
  }



  closeModal(){
    this.onClose.next(null);
    this.bsModalRef.hide()
  }



  selectImage(event: any, id) {
    this.http.uploadImageService(ApiUrl.upload_api, event, id).subscribe(response => {
        this.imageValue = response.data.original
        this.form.controls.image.patchValue(response.data.original); 
        console.log(response,'...responseresponseresponse')
    }, (err) => {
   
    });
  }

  removeImage(id) {
    document.getElementById(id)[`value`] = '';
    this.form.controls.image.patchValue('');
  }



  hideCustomModal(){
    this.form.reset()
    this.modalRef.hide();
  }


}



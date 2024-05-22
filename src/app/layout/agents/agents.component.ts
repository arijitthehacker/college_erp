import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { ConstMsg } from 'src/app/core/ConstMsg';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AddAgentComponent } from './add-agent/add-agent.component';
import {
  ChangeMemberPasswordComponent
} from '../../shared/components/change-member-password/change-member-password.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './agents.component.html'
})
export class AgentsComponent implements OnInit {

  allData: any = [];
  date = '';
  search = '';
  pagination = new PaginationControls();
  form: FormGroup;
  form1: FormGroup;
  showErrorPre: boolean;
  showErrorPost: boolean;
  constructor(private http: HttpService,private fb: FormBuilder, private message: MessageService, public commonService: CommonService,
              private modalService: BsModalService, public router: Router) {
  }

  ngOnInit() {
    this.makeform()
    this.makeform1()
    // this.getData();
  }

  makeform(){
    this.form = this.fb.group({
      pre_approval: ['', Validators.required],
    });
  }
  makeform1(){
    this.form1 = this.fb.group({
      post_approval:['',Validators.required]
    });
  }
  searchFun() {
    this.pagination.pageNo = 1;
    this.getData();
  }

  submitpre(){
    if(this.form.valid){
      console.log(this.form.value)
    }else{
      this.showErrorPre = true;
    }
  }

  submitpost(){
    if(this.form1.valid){
      console.log(this.form1.value)
    }else{
      this.showErrorPost = true;
    }
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip
    };
    if (this.search) {
      obj.search = this.search;
    }

    this.http.getData(ApiUrl.list_agents, obj).subscribe(res => {
      res.data.data.forEach((val) => {
        let showCode = '';
        val.invite_codes.forEach((val1, key1) => {
          showCode = showCode + val1.invite_code;
          if (key1 != val.invite_codes.length - 1) {
            showCode = showCode + ', ';
          }
        });
        val.showCode = showCode;
      });
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;

      if (res.data.total_count > 0 && !this.allData?.length) {
        this.pagination.pageNo--;
        this.getData();
      }

    }, () => {
    });
  }

  blockUnblock(data: any) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.managed_agents, obj).subscribe(() => {
      this.commonService.checkBlockUnblock(data);
    }, () => {
    });
  }

  deleteData(data: any) {
    this.message.confirm(`delete this ${this.commonService.title}`).then(res => {
      if (res.isConfirmed) {
        const obj: any = {
          _id: data._id,
          is_deleted: true
        };
        this.http.putData(ApiUrl.managed_agents, obj).subscribe(() => {
          this.message.toast('success', ConstMsg.deleteSuccess);
          this.getData();
        }, () => {
        });
      }
    });

  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddAgentComponent, {
      initialState: {modalData: data}, backdrop: 'static', keyboard: false, class: 'modal-lg'
    });
    modalRef.content.onClose.subscribe(() => {
      this.getData();
    });
  }


  openChangePassword(modalData?: any) {
    const modalRef = this.modalService.show(ChangeMemberPasswordComponent, {
      initialState: {modalData: modalData,apiUrl : ApiUrl.managed_agents},
      backdrop: 'static',
      keyboard: false,
      class: 'modal-md'
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../services/commonService/common.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './assign-booking.component.html'
})
export class AssignBookingComponent implements OnInit {

  showError = false;
  form: FormGroup;
  public onClose: Subject<{}> = new Subject();
  modalData: any;
  agents: any = [];
  paymentData: any;

  constructor(private fb: FormBuilder, public message: MessageService, private http: HttpService,
              public bsModalRef: BsModalRef, public commonService: CommonService) {
  }

  ngOnInit() {
    this.makeForm();
    this.getAgents();
  }

  makeForm() {
    this.form = this.fb.group({
      assignType: ['agent', Validators.required],
      agent_id: [''],
      _id: ['']
    });

  }

  formSubmit() {
    if (this.form.valid) {
      const obj: any = {};
      if (this.form?.value?.assignType === 'agent') {
        if (this.form.value.agent_id) {
          obj.agent_id = this.form.value.agent_id;
        } else {
          this.message.toast('error', 'Please select at least 1 agent');
          return;
        }
      } else {
        obj.is_asssign_group_owner = true;
      }
      obj._id = this.modalData._id;
      this.http.postData(ApiUrl.assign_booking_to_agent_or_owner, obj).subscribe(() => {
        this.onClose.next(null);
        this.message.toast('success', 'Assigned Successfully!');
        this.bsModalRef.hide();
      }, () => {
      });
    } else {
      this.showError = true;
    }
  }

  getAgents() {
    let obj: any = {
      is_pagination: false
    };
    this.http.getData(ApiUrl.list_agents, obj).subscribe(res => {
      this.agents = res.data.data;
    });
  }

}



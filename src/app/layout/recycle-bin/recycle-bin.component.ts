import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { ApiUrl } from '../../core/apiUrl';
import { PaginationControls } from '../../shared/models/pagination-model';

@Component({
  selector: 'app-accounts',
  templateUrl: './recycle-bin.component.html'
})
export class RecycleBinComponent implements OnInit {
  allData: any = [];
  pagination = new PaginationControls();

  models: any = [
    {name: 'Agents', id: 'Agents'},
    {name: 'Group Owners', id: 'GroupOwnwers'},
    {name: 'Users', id: 'Users'},
    {name: 'Properties', id: 'Peroperties'},
    {name: 'Properties Category', id: 'PeropertiesCategory'},
    {name: 'Properties Address', id: 'PeropertiesAddress'},
    {name: 'Properties Purpose', id: 'PeropertiesPupose'},
    {name: 'Properties Budgets', id: 'Peropertiesbudgets'},
    {name: 'Properties reason', id: 'Peropertiesreason'},
    {name: 'Developers', id: 'Developers'},
    {name: 'Commissions', id: 'Commissions'}
  ];

  model_name = this.models[0].id;

  constructor(private http: HttpService, private message: MessageService, public commonService: CommonService,
              public router: Router, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip,
      model_name: this.model_name
    };

    this.http.getData(ApiUrl.list_trash_data, obj).subscribe(res => {
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    });
  }

  action(data, action) {
    let obj: any = {
      type: 'ONE',
      action,
      _id: data._id,
      model_name: this.model_name
    };
    this.http.putData(ApiUrl.delete_trash_data, obj).subscribe((res => {
      this.getData();
      this.message.toast('success', 'Done successfully!');
    }));
  }

}

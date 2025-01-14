import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { CommonService } from 'src/app/services/commonService/common.service';
import { MessageService } from 'src/app/services/message/message.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import * as moment from 'moment';

@Component({
  selector: 'app-accounts',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent implements OnInit {

  allData: any = [];
  date = '';
  pagination = new PaginationControls();
  search = '';
  type = '';
  history_type = 'ALL';
  dates = new FormControl([]);
  currentDate = new Date();
  prevDate = new Date();
  category = 'ALL';
  isForSearch: any;

  constructor(private http: HttpService, public commonService: CommonService,
              public router: Router, public lightbox: Lightbox) {
    this.dates.patchValue([new Date(this.prevDate.setMonth(this.prevDate.getMonth() - 1)), new Date()]);
    this.dates.valueChanges.subscribe(res => {
      this.getData();
    });
  }

  ngOnInit() {
    this.getData();
  }

  emptyDate() {
    this.dates.patchValue([]);
  }

  getData() {
    this.pagination.skip = (this.pagination.pageNo - 1) * this.pagination.limit;
    let obj: any = {
      skip: this.pagination.skip,
      type: 'COMPLETED'
    };
    if (this.search) {
      obj.search = this.search;
      obj.skip = 0
     
    }
    // if (this.type) {
    //   obj.type = this.type;
    // }
    if (this.history_type) {
      obj.history_type = this.history_type;
    }
    if (this.category) {
      obj.category = this.category;
    }
    if (this.dates.value) {
      const data: any = this.dates.value;
      if (data?.length) {
        obj.start_date = moment(data[0]).format('yyyy-MM-DD');
        obj.end_date = moment(data[1]).format('yyyy-MM-DD');
      }
    }
    
    this.http.getData(ApiUrl.accounts_list, obj).subscribe(res => {
      if (this.isForSearch) {
        this.isForSearch = false
        this.pagination.pageNo =1
        this.pagination.skip =0
      }
   
      this.allData = res.data.data;
      this.pagination.count = res.data.total_count;
    }, () => {
   
    });
  }

  tranferredTo(data :any){
    let temp:any
    if(data?.gold_member_plus_id?.name){
      temp = 'Ambassodor Plus'
    }else if(data?.gold_member_id?.name) {
      temp = 'Ambassador'
    }else if(data?.member_id?.name){
      temp = 'Member'
    }else if(data?.agent_id?.name){
      temp = 'Agent'
    }else if(data?.group_owner_id?.name){
      temp = 'Founder'
    }
    return temp;
  }

  checkNumberData(value:string){
   if (value.includes(`${undefined}`) || value.includes(`${null}`)) {
    return ''
   }else{
    console.log(value,'....valll')
    return value
   }
  }

  searchData() {
    this.isForSearch = true
    this.getData()
  }

  exportData() {
    let obj: any = {
      skip: this.pagination.skip,
      type: 'COMPLETED',
      category: 'ALL',
      history_type: 'ALL',
      is_pagination: false
    };
    this.http.getData(ApiUrl.accounts_list, obj).subscribe(res => {
      let temp: any = [];
      res.data.data.forEach((data) => {

        temp.push({
          // 'Name': data?.group_owner_id?.name || data?.agent_id?.name || data?.member_id?.name,
          'Date & Time': moment(data?.time).format('DD-MM-yyyy, hh:mm a'),
          'Property Name': data?.booking_id?.peroperty_id?.name,
          'Developer Name': data?.booking_id?.peroperty_id?.developer_id?.name,
          'Transferred To' : this.tranferredTo(data),
          'Transferred To Name': data?.group_owner_id?.name || data?.agent_id?.name || data?.member_id?.name || data?.gold_member_id?.name || data?.gold_member_plus_id?.name,
          'Transferred To Phone No.': this.checkNumberData(`${data?.group_owner_id?.country_code}${data?.group_owner_id?.phone_number}`) || this.checkNumberData(`${data?.agent_id?.country_code}${data?.agent_id?.phone_number}`) || this.checkNumberData(`${data?.member_id?.country_code}${data?.member_id?.phone_number}`) || this.checkNumberData(`${data?.gold_member_id?.country_code}${data?.gold_member_id?.phone_number}`) || this.checkNumberData(`${data?.gold_member_plus_id?.country_code}${data?.gold_member_plus_id?.phone_number}`) || '',
          'Completed On': moment(data?.time).format('DD-MM-yyyy, hh:mm a'),
          'Member Name': data?.booking_id?.member_id?.name,
          'Member Phone No.': this.checkNumberData(`${data?.booking_id?.member_id?.country_code}${data?.booking_id?.member_id?.phone_number}`),
          'Founder Name': data?.booking_id?.group_owner_id?.name,
          'Founder Phone No.': this.checkNumberData(`${data?.booking_id?.group_owner_id?.country_code}${data?.booking_id?.group_owner_id?.phone_number}`),
          'Agent Name': data?.booking_id?.agent_id?.name,
          'Agent Phone No.': this.checkNumberData(`${data?.booking_id?.agent_id?.country_code}${data?.booking_id?.agent_id?.phone_number}`),
          'Ambassador Name': data?.booking_id?.gold_member_id?.name || '',
          'Ambassador Phone No.': this.checkNumberData(`${data?.booking_id?.gold_member_id?.country_code}${data?.booking_id?.gold_member_id?.phone_number}`) || '',
          'Ambassador Plus Name': data?.booking_id?.gold_member_plus_id?.name || '',
          'Ambassador Plus Phone No.': this.checkNumberData(`${data?.booking_id?.gold_member_plus_id?.country_code}${data?.booking_id?.gold_member_plus_id?.phone_number}`) || '',
          'Customer Name': data?.booking_id?.name,
          'Customer Phone No': this.checkNumberData(`${data?.booking_id?.country_code}${data?.booking_id?.phone_number}`),

          // 'Property Price': data?.commission_price,
          'Transaction Image': data.transaction_image,
          'Transaction Id': data?.transaction_id,
          'Transaction Comment': data?.transaction_comment,
          'Rejected Comment': data?.rejected_comment,
          'Account Name': data?.group_owner_id?.account_name || data?.agent_id?.account_name || data?.member_id?.account_name || data?.gold_member_id?.account_name || data?.gold_member_plus_id?.account_name || '',
          'Account Number': data?.group_owner_id?.account_number || data?.agent_id?.account_number || data?.member_id?.account_number || data?.gold_member_id?.account_number || data?.gold_member_plus_id?.account_number || '',
          'Bank Name': data?.group_owner_id?.bank_name || data?.gold_member_id?.bank_name || data?.agent_id?.bank_name || data?.member_id?.bank_name || data?.gold_member_plus_id?.bank_name || '',
          'Sort Code': data?.group_owner_id?.sort_code || data?.agent_id?.sort_code || data?.member_id?.sort_code || data?.gold_member_id?.sort_code || data?.gold_member_plus_id?.sort_code || '',
          'Property final price': data?.booking_id?.commission_price,
          'Advance Payment': data?.advanced_price,
          'Pending Payment': data?.total_price - data?.advanced_price,
          'Unit No.': data?.unit_no
        });
      });
      this.http.postData(ApiUrl.export_json_csv, {data: temp}).subscribe(res1 => {
        this.commonService.goToLink(res1.data.original);
      });

    }, () => {
    });

  }

}

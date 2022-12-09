"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[308],{5308:(U,g,s)=>{s.r(g),s.d(g,{MembersModule:()=>R});var d=s(6895),w=s(2227),c=s(5522),h=s(8099),l=s(433),e=s(1571),f=s(7849),v=s(3755),b=s(388),C=s(7564),p=s(8867),_=s(2553);function x(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function M(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275text(1," Password should be minimum of 6 characters. "),e.\u0275\u0275elementEnd())}function E(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}let I=(()=>{class o{constructor(t,n,r,a,m,u){this.fb=t,this.message=n,this.http=r,this.bsModalRef=a,this.commonService=m,this.activatedRoute=u,this.showError=!1,this.modalData={},localStorage.getItem("profileData")&&(this.profileData=JSON.parse(localStorage.getItem("profileData")))}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({password:["",l.Validators.compose([l.Validators.required])],confirmPassword:["",l.Validators.required]})}formSubmit(){if(this.form.valid){if(this.form.value.password.toString().length>6)return void this.message.toast("error","Password should be minimum of 6 characters.");if(this.form.value.password!=this.form.value.confirmPassword)return void this.message.toast("error","Password and confirm password should be same");let n={password:JSON.parse(JSON.stringify(this.form.value.password)),_id:this.modalData._id};console.log(this.modalData,"ddasdas"),this.http.putData(c.l.managed_members,n).subscribe(()=>{this.message.toast("success",h.H.updatedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(l.FormBuilder),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(b.UZ),e.\u0275\u0275directiveInject(C.v),e.\u0275\u0275directiveInject(p.gz))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:21,vars:5,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"form-group","col-md-12"],[1,"login-label","required"],["formControlName","password","type","password","placeholder","***********************",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],["formControlName","confirmPassword","type","password","placeholder","***********************",1,"form-control",3,"keydown.space"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2," Set password "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"label",5),e.\u0275\u0275text(7,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"input",6),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(9,x,2,0,"div",7),e.\u0275\u0275template(10,M,2,0,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",4)(12,"label",5),e.\u0275\u0275text(13,"Confirm Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"input",8),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(15,E,2,0,"div",7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"div",9)(17,"button",10),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(18,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"button",11),e.\u0275\u0275text(20),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==n.form.controls.password.errors?null:n.form.controls.password.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.password.errors?null:n.form.controls.password.errors.minLength)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.confirmPassword.errors?null:n.form.controls.confirmPassword.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[d.NgIf,l.\u0275NgNoValidate,l.DefaultValueAccessor,l.NgControlStatus,l.NgControlStatusGroup,l.FormGroupDirective,l.FormControlName,_.mh],encapsulation:2}),o})();var y=s(2382),k=s(1681),S=s(4333);function D(o,i){1&o&&e.\u0275\u0275element(0,"i",25)}function P(o,i){1&o&&e.\u0275\u0275element(0,"i",26)}function N(o,i){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"img",17),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.commonService.openLightBox(a.image))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275element(10,"app-see-more",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td"),e.\u0275\u0275text(14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"td",19)(16,"div",20),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.blockUnblock(a))}),e.\u0275\u0275template(17,D,1,0,"i",21),e.\u0275\u0275template(18,P,1,0,"i",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"div")(20,"i",23),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.deleteData(a))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"div")(22,"i",24),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.openChangePassword(a))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=i.$implicit,n=i.index,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",n+r.pagination.pageSize*(r.pagination.pageNo-1)+1,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.image||"/assets/images/no-img.webp",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t?null:t.name)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t?null:t.email)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.showCode)("title","Invite Code Details"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("",null==t?null:t.country_code," ",null==t?null:t.phone_number,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",null!=t&&t.is_gold?"Gold":"-"," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==t?null:t.is_blocked),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=t&&t.is_blocked))}}function T(o,i){1&o&&e.\u0275\u0275element(0,"app-no-record")}function j(o,i){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",27)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",28)(5,"pagination-controls",29),e.\u0275\u0275listener("pageChange",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return a.pagination.pageNo=r,e.\u0275\u0275resetView(a.getData())}),e.\u0275\u0275elementEnd()()()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const V=function(o,i,t){return{itemsPerPage:o,currentPage:i,totalItems:t}};let F=(()=>{class o{constructor(t,n,r,a,m){this.http=t,this.message=n,this.commonService=r,this.modalService=a,this.router=m,this.allData=[],this.date="",this.search="",this.pagination=new w.j}ngOnInit(){this.getData()}searchFun(){this.pagination.pageNo=1,this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search&&(t.search=this.search),this.http.getData(c.l.list_members,t).subscribe(n=>{n.data.data.forEach(r=>{let a="";r.invite_codes.forEach((m,u)=>{a+=m.invite_code,u!=r.invite_codes.length-1&&(a+=", ")}),r.showCode=a}),this.allData=n.data.data,this.pagination.count=n.data.total_count,n.data.total_count>0&&!this.allData?.length&&(this.pagination.pageNo--,this.getData())},()=>{})}blockUnblock(t){this.http.putData(c.l.managed_members,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(c.l.managed_members,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",h.H.deleteSuccess),this.getData()},()=>{})})}openChangePassword(t){console.log(t,"modalData"),this.modalService.show(I,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(C.v),e.\u0275\u0275directiveInject(b.tT),e.\u0275\u0275directiveInject(p.F0))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:40,vars:12,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box","box-header"],[1,"col-md-9"],[1,"card-title","float-left"],[1,"col-md-3","text-right","sm-input-space"],[1,"input-group","mb-3"],["type","text","placeholder","Search",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],[1,"input-group-text",3,"click"],[1,"fa","fa-search"],[1,"row","mt-3","mb-2"],[1,"my-box"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"small-img",3,"src","click"],[3,"msg","title"],[1,"edit-section"],[3,"click"],["class","fa fa-lock",4,"ngIf"],["class","fa fa-unlock",4,"ngIf"],[1,"fa","fa-trash",3,"click"],[1,"fa","fa-key",3,"click"],[1,"fa","fa-lock"],[1,"fa","fa-unlock"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"input",7),e.\u0275\u0275listener("ngModelChange",function(a){return n.search=a})("keyup.enter",function(){return n.searchFun()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"span",8),e.\u0275\u0275listener("click",function(){return n.searchFun()}),e.\u0275\u0275element(11,"i",9),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(12,"div",10)(13,"div",1)(14,"div",11)(15,"div",12)(16,"table",13)(17,"thead")(18,"tr")(19,"th"),e.\u0275\u0275text(20,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"th"),e.\u0275\u0275text(22,"Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"th"),e.\u0275\u0275text(24,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"th"),e.\u0275\u0275text(26,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"th"),e.\u0275\u0275text(28,"Invite Codes"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"th"),e.\u0275\u0275text(30,"Contact Number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"th"),e.\u0275\u0275text(32,"Gold Member"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"th"),e.\u0275\u0275text(34,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(35,"tbody"),e.\u0275\u0275template(36,N,23,11,"tr",14),e.\u0275\u0275pipe(37,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(38,T,1,0,"app-no-record",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(39,j,6,3,"div",16),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",n.search),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(37,5,n.allData,e.\u0275\u0275pureFunction3(8,V,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[d.NgForOf,d.NgIf,y.b,k.S,l.DefaultValueAccessor,l.NgControlStatus,S.LS,l.NgModel,_.mh,S._s],encapsulation:2}),o})();var O=s(6834);const L=[{path:"",component:F}];let R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,O.m,p.Bz.forChild(L)]}),o})()}}]);
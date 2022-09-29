"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[945],{3945:(R,u,a)=>{a.r(u),a.d(u,{PurposesModule:()=>w});var m=a(6895),S=a(2227),d=a(5522),p=a(8099),l=a(433),x=a(7579),e=a(1571),f=a(7849),h=a(3755),v=a(388),g=a(7564),I=a(2553);function P(o,r){1&o&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}let _=(()=>{class o{constructor(t,n,i,s,c){this.fb=t,this.message=n,this.http=i,this.bsModalRef=s,this.commonService=c,this.showError=!1,this.onClose=new x.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({name:["",[l.Validators.required]]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({name:t.name})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(d.l.add_edit_peroperty_purpose,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}selectImage(t,n){this.http.uploadImageService(d.l.upload_api,t,n).subscribe(i=>{this.form.controls.image.patchValue(i.data.original)},()=>{})}removeImage(t){this.form.controls.image.patchValue(t)}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(l.FormBuilder),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(h.O),e.\u0275\u0275directiveInject(v.UZ),e.\u0275\u0275directiveInject(g.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:16,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","type","text","placeholder","Enter Purpose",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"Purpose"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,P,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(11,"div",9)(12,"button",10),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(13,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"button",11),e.\u0275\u0275text(15),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Create New"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[m.NgIf,l.\u0275NgNoValidate,l.DefaultValueAccessor,l.NgControlStatus,l.NgControlStatusGroup,l.FormGroupDirective,l.FormControlName,I.mh],encapsulation:2}),o})();var b=a(8867),y=a(1305),E=a(2382),C=a(4333);function D(o,r){1&o&&e.\u0275\u0275element(0,"i",20)}function k(o,r){1&o&&e.\u0275\u0275element(0,"i",21)}function N(o,r){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td",14)(6,"div",15),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.blockUnblock(s))}),e.\u0275\u0275template(7,D,1,0,"i",16),e.\u0275\u0275template(8,k,1,0,"i",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div")(10,"i",18),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.addEditModalOpen(s))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div")(12,"i",19),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.deleteData(s))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=r.$implicit,n=r.index,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+i.pagination.pageSize*(i.pagination.page-1)+1),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==t?null:t.is_blocked),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=t&&t.is_blocked))}}function j(o,r){1&o&&e.\u0275\u0275element(0,"app-no-record")}function T(o,r){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"div",22),e.\u0275\u0275elementStart(2,"div",23)(3,"pagination-controls",24),e.\u0275\u0275listener("pageChange",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return s.pagination.pageNo=i,e.\u0275\u0275resetView(s.getData())}),e.\u0275\u0275elementEnd()()()}}const V=function(o,r,t){return{itemsPerPage:o,currentPage:r,totalItems:t}};let F=(()=>{class o{constructor(t,n,i,s,c,A){this.http=t,this.message=n,this.commonService=i,this.modalService=s,this.router=c,this.lightbox=A,this.allData=[],this.date="",this.pagination=new S.j,this.search=new l.FormControl("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(d.l.list_property_purpose,t).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(d.l.managed_peroperty_purpose,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(d.l.managed_peroperty_purpose,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(_,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(h.O),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(g.v),e.\u0275\u0275directiveInject(v.tT),e.\u0275\u0275directiveInject(b.F0),e.\u0275\u0275directiveInject(y.ey))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:31,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9"],[1,"col-md-3","sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"edit-section"],[3,"click"],["class","fa fa-lock",4,"ngIf"],["class","fa fa-unlock",4,"ngIf"],[1,"fa","fa-edit",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"fa","fa-lock"],[1,"fa","fa-unlock"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",0),e.\u0275\u0275element(9,"div",5),e.\u0275\u0275elementStart(10,"div",6)(11,"button",7),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(12," Create New Purpose "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(13,"div",8)(14,"div",1)(15,"div",2)(16,"div",9)(17,"table",10)(18,"thead")(19,"tr")(20,"th"),e.\u0275\u0275text(21,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(26,"tbody"),e.\u0275\u0275template(27,N,13,4,"tr",11),e.\u0275\u0275pipe(28,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(29,j,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(30,T,4,0,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(21),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(28,4,n.allData,e.\u0275\u0275pureFunction3(7,V,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[m.NgForOf,m.NgIf,E.b,C.LS,C._s],encapsulation:2}),o})();var M=a(8226);const O=[{path:"",component:F}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,M.m,b.Bz.forChild(O)]}),o})()}}]);
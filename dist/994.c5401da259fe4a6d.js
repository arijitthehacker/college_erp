"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[994],{2994:(H,u,r)=>{r.r(u),r.d(u,{CommissionsModule:()=>U});var d=r(6895),S=r(2227),c=r(5522),p=r(8099),m=r(433),E=r(7579),e=r(1571),f=r(7849),v=r(3755),g=r(388),h=r(7564),_=r(7797),x=r(2553);function I(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function y(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function w(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function D(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function N(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function T(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function V(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",16),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}let j=(()=>{class n{constructor(t,o,a,s,l){this.fb=t,this.message=o,this.http=a,this.bsModalRef=s,this.commonService=l,this.showError=!1,this.onClose=new E.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({name:["",m.Validators.compose([m.Validators.required])],agent_commision:["",m.Validators.compose([m.Validators.required,m.Validators.max(100)])],group_owner_commision:["",m.Validators.compose([m.Validators.required,m.Validators.max(100)])],member_commision:["",m.Validators.compose([m.Validators.required,m.Validators.max(100)])]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({name:t.name,member_commision:t.member_commision,group_owner_commision:t.group_owner_commision,agent_commision:t.agent_commision})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(c.l.add_edit_comission,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(m.FormBuilder),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(g.UZ),e.\u0275\u0275directiveInject(h.v))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-add-account"]],decls:34,vars:12,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","placeholder","Enter name",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"set-label","required"],["formControlName","group_owner_commision","appAmount","","type","text","placeholder","Enter group owner commission",1,"form-control"],["formControlName","agent_commision","appAmount","","type","text","placeholder","Enter agent commission",1,"form-control"],["formControlName","member_commision","appAmount","","type","text","placeholder","Enter member commission",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return o.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8," name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,I,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13," group owner commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",10),e.\u0275\u0275template(15,y,2,0,"div",8),e.\u0275\u0275template(16,w,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",5)(18,"label",9),e.\u0275\u0275text(19," agent commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"input",11),e.\u0275\u0275template(21,D,2,0,"div",8),e.\u0275\u0275template(22,N,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",5)(24,"label",9),e.\u0275\u0275text(25," member commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"input",12),e.\u0275\u0275template(27,T,2,0,"div",8),e.\u0275\u0275template(28,V,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(29,"div",13)(30,"button",14),e.\u0275\u0275listener("click",function(){return o.bsModalRef.hide()}),e.\u0275\u0275text(31,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"button",15),e.\u0275\u0275text(33),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",o.modalData?"Edit":"Create New"," ",o.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",o.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==o.form.controls.name.errors?null:o.form.controls.name.errors.required)&&o.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==o.form.controls.group_owner_commision.errors?null:o.form.controls.group_owner_commision.errors.required)&&o.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==o.form.controls.group_owner_commision.errors?null:o.form.controls.group_owner_commision.errors.max)&&o.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==o.form.controls.agent_commision.errors?null:o.form.controls.agent_commision.errors.required)&&o.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==o.form.controls.agent_commision.errors?null:o.form.controls.agent_commision.errors.max)&&o.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==o.form.controls.member_commision.errors?null:o.form.controls.member_commision.errors.required)&&o.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==o.form.controls.member_commision.errors?null:o.form.controls.member_commision.errors.max)&&o.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(o.modalData?"Update":"Submit"))},dependencies:[d.NgIf,_.i,m.\u0275NgNoValidate,m.DefaultValueAccessor,m.NgControlStatus,m.NgControlStatusGroup,m.FormGroupDirective,m.FormControlName,x.mh],encapsulation:2}),n})();var C=r(8867),A=r(1305),F=r(2382),b=r(4333);function M(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td",14)(12,"div")(13,"i",15),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.addEditModalOpen(s))}),e.\u0275\u0275elementEnd()()()()}if(2&n){const t=i.$implicit,o=i.index,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",10*(a.pagination.pageNo-1)+o+1," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.member_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.agent_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.group_owner_commision)}}function O(n,i){1&n&&e.\u0275\u0275element(0,"app-no-record")}function k(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",16)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",17)(5,"pagination-controls",18),e.\u0275\u0275listener("pageChange",function(a){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return s.pagination.pageNo=a,e.\u0275\u0275resetView(s.getData())}),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const R=function(n,i,t){return{itemsPerPage:n,currentPage:i,totalItems:t}};let P=(()=>{class n{constructor(t,o,a,s,l,B){this.http=t,this.message=o,this.commonService=a,this.modalService=s,this.router=l,this.lightbox=B,this.allData=[],this.date="",this.pagination=new S.j,this.search=new m.FormControl("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(c.l.list_comission,t).subscribe(o=>{this.allData=o.data.data,this.pagination.count=o.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(o=>{o.isConfirmed&&this.http.putData(c.l.managed_comission,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(c.l.managed_comission,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(j,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(h.v),e.\u0275\u0275directiveInject(g.tT),e.\u0275\u0275directiveInject(C.F0),e.\u0275\u0275directiveInject(A.ey))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-accounts"]],decls:35,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"edit-section"],[1,"fa","fa-edit",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return o.addEditModalOpen()}),e.\u0275\u0275text(10," Create New commission "),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Member Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Agent Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Group Owner Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(30,"tbody"),e.\u0275\u0275template(31,M,14,5,"tr",11),e.\u0275\u0275pipe(32,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(33,O,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(34,k,6,3,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1(" ",null==o.commonService?null:o.commonService.breadcrumb," "),e.\u0275\u0275advance(25),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(32,4,o.allData,e.\u0275\u0275pureFunction3(7,R,o.pagination.pageSize,o.pagination.pageNo,o.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!o.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.pagination.count))},dependencies:[d.NgForOf,d.NgIf,F.b,b.LS,b._s],encapsulation:2}),n})();var L=r(6834);const G=[{path:"",component:P}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,L.m,C.Bz.forChild(G)]}),n})()}}]);
"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[994],{62994:(S,p,m)=>{m.r(p),m.d(p,{CommissionsModule:()=>B});var l=m(36895),u=m(82227),d=m(92531),f=m(98099),r=m(90433),E=m(77579),e=m(41571),h=m(7849),g=m(3755),v=m(20388),C=m(87564),I=m(57797),x=m(12553);function y(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function w(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function k(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function N(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function T(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function D(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function j(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function A(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function M(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}let O=(()=>{class o{constructor(t,n,s,a,c){this.fb=t,this.message=n,this.http=s,this.bsModalRef=a,this.commonService=c,this.showError=!1,this.onClose=new E.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({name:["",r.kI.compose([r.kI.required])],agent_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],group_owner_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],member_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],gold_member_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({name:t.name,member_commision:t.member_commision,gold_member_commision:t.gold_member_commision,group_owner_commision:t.group_owner_commision,agent_commision:t.agent_commision})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(d.l.add_edit_comission,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?f.H.updatedSuccess:f.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(r.qu),e.\u0275\u0275directiveInject(h.e),e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(v.UZ),e.\u0275\u0275directiveInject(C.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:40,vars:14,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","placeholder","Enter name",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"set-label","required"],["formControlName","group_owner_commision","appAmount","","type","text","placeholder","Enter group owner commission",1,"form-control"],["formControlName","agent_commision","appAmount","","type","text","placeholder","Enter agent commission",1,"form-control"],["formControlName","member_commision","appAmount","","type","text","placeholder","Enter member commission",1,"form-control"],["formControlName","gold_member_commision","appAmount","","type","text","placeholder","Enter gold member commission",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8," name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,y,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13," group owner commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",10),e.\u0275\u0275template(15,w,2,0,"div",8),e.\u0275\u0275template(16,k,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",5)(18,"label",9),e.\u0275\u0275text(19," agent commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"input",11),e.\u0275\u0275template(21,N,2,0,"div",8),e.\u0275\u0275template(22,T,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",5)(24,"label",9),e.\u0275\u0275text(25," member commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"input",12),e.\u0275\u0275template(27,D,2,0,"div",8),e.\u0275\u0275template(28,j,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",5)(30,"label",9),e.\u0275\u0275text(31," Gold member commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(32,"input",13),e.\u0275\u0275template(33,A,2,0,"div",8),e.\u0275\u0275template(34,M,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(35,"div",14)(36,"button",15),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(37,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"button",16),e.\u0275\u0275text(39),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Create New"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.group_owner_commision.errors?null:n.form.controls.group_owner_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.group_owner_commision.errors?null:n.form.controls.group_owner_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.agent_commision.errors?null:n.form.controls.agent_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.agent_commision.errors?null:n.form.controls.agent_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.member_commision.errors?null:n.form.controls.member_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.member_commision.errors?null:n.form.controls.member_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.gold_member_commision.errors?null:n.form.controls.gold_member_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.gold_member_commision.errors?null:n.form.controls.gold_member_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[l.NgIf,I.i,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,x.mh],encapsulation:2}),o})();var b=m(38867),F=m(81305),L=m(42382),_=m(54333);function P(o,i){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td",14)(14,"div")(15,"i",15),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.addEditModalOpen(a))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=i.$implicit,n=i.index,s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",10*(s.pagination.pageNo-1)+n+1," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.group_owner_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.agent_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.member_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.gold_member_commision)}}function R(o,i){1&o&&e.\u0275\u0275element(0,"app-no-record")}function V(o,i){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",16)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",17)(5,"pagination-controls",18),e.\u0275\u0275listener("pageChange",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return a.pagination.pageNo=s,e.\u0275\u0275resetView(a.getData())}),e.\u0275\u0275elementEnd()()()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const G=function(o,i,t){return{itemsPerPage:o,currentPage:i,totalItems:t}};let J=(()=>{class o{constructor(t,n,s,a,c,H){this.http=t,this.message=n,this.commonService=s,this.modalService=a,this.router=c,this.lightbox=H,this.allData=[],this.date="",this.pagination=new u.j,this.search=new r.NI("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(d.l.list_comission,t).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(d.l.managed_comission,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",f.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(d.l.managed_comission,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(O,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(h.e),e.\u0275\u0275directiveInject(C.v),e.\u0275\u0275directiveInject(v.tT),e.\u0275\u0275directiveInject(b.F0),e.\u0275\u0275directiveInject(F.ey))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:37,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"edit-section"],[1,"fa","fa-edit",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(10," Create New commission "),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Group Owner Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Agent Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Member Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Gold Member Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th"),e.\u0275\u0275text(31,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"tbody"),e.\u0275\u0275template(33,P,16,6,"tr",11),e.\u0275\u0275pipe(34,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(35,R,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(36,V,6,3,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1(" ",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(34,4,n.allData,e.\u0275\u0275pureFunction3(7,G,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[l.NgForOf,l.NgIf,L.b,_.LS,_._s],encapsulation:2}),o})();var U=m(53470);const z=[{path:"",component:J}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.CommonModule,U.m,b.Bz.forChild(z)]}),o})()},82227:(S,p,m)=>{m.d(p,{N:()=>u,j:()=>l});class l{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}class u{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}}}]);
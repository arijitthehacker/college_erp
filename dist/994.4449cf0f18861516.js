"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[994],{62994:(S,p,i)=>{i.r(p),i.d(p,{CommissionsModule:()=>H});var l=i(36895),u=i(82227),d=i(92531),f=i(98099),r=i(90433),E=i(77579),e=i(41571),h=i(7849),g=i(3755),v=i(20388),C=i(87564),I=i(57797),x=i(64813),y=i(12553);function T(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function k(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function w(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function N(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function A(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function D(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function j(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function F(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function M(o,m){1&o&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}let O=(()=>{class o{constructor(t,n,s,a,c){this.fb=t,this.message=n,this.http=s,this.bsModalRef=a,this.commonService=c,this.showError=!1,this.onClose=new E.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({name:["",r.kI.compose([r.kI.required])],agent_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],group_owner_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],member_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])],gold_member_commision:["",r.kI.compose([r.kI.required,r.kI.max(100)])]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({name:t.name,member_commision:t.member_commision,gold_member_commision:t.gold_member_commision,group_owner_commision:t.group_owner_commision,agent_commision:t.agent_commision})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(d.l.add_edit_comission,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?f.H.updatedSuccess:f.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(r.qu),e.\u0275\u0275directiveInject(h.e),e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(v.UZ),e.\u0275\u0275directiveInject(C.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:40,vars:14,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","appTrim","","placeholder","Enter name",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"set-label","required"],["formControlName","group_owner_commision","appAmount","","appTrim","","type","text","placeholder","Enter Founder commission",1,"form-control"],["formControlName","agent_commision","appAmount","","appTrim","","type","text","placeholder","Enter agent commission",1,"form-control"],["formControlName","member_commision","appAmount","","appTrim","","type","text","placeholder","Enter member commission",1,"form-control"],["formControlName","gold_member_commision","appAmount","","appTrim","","type","text","placeholder","Enter Ambassador commission",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8," name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,T,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13," Founder commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",10),e.\u0275\u0275template(15,k,2,0,"div",8),e.\u0275\u0275template(16,w,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",5)(18,"label",9),e.\u0275\u0275text(19," agent commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"input",11),e.\u0275\u0275template(21,N,2,0,"div",8),e.\u0275\u0275template(22,A,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",5)(24,"label",9),e.\u0275\u0275text(25," member commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"input",12),e.\u0275\u0275template(27,D,2,0,"div",8),e.\u0275\u0275template(28,j,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",5)(30,"label",9),e.\u0275\u0275text(31,"Ambassador commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(32,"input",13),e.\u0275\u0275template(33,F,2,0,"div",8),e.\u0275\u0275template(34,M,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(35,"div",14)(36,"button",15),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(37,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"button",16),e.\u0275\u0275text(39),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Create New"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.group_owner_commision.errors?null:n.form.controls.group_owner_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.group_owner_commision.errors?null:n.form.controls.group_owner_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.agent_commision.errors?null:n.form.controls.agent_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.agent_commision.errors?null:n.form.controls.agent_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.member_commision.errors?null:n.form.controls.member_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.member_commision.errors?null:n.form.controls.member_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.gold_member_commision.errors?null:n.form.controls.gold_member_commision.errors.required)&&n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.gold_member_commision.errors?null:n.form.controls.gold_member_commision.errors.max)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[l.NgIf,I.i,x.$,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,y.mh],encapsulation:2}),o})();var b=i(38867),L=i(81305),P=i(42382),_=i(54333);function R(o,m){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td",14)(14,"div")(15,"i",15),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.addEditModalOpen(a))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=m.$implicit,n=m.index,s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",10*(s.pagination.pageNo-1)+n+1," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.group_owner_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.agent_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.member_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.gold_member_commision)}}function V(o,m){1&o&&e.\u0275\u0275element(0,"app-no-record")}function J(o,m){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",16)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",17)(5,"pagination-controls",18),e.\u0275\u0275listener("pageChange",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return a.pagination.pageNo=s,e.\u0275\u0275resetView(a.getData())}),e.\u0275\u0275elementEnd()()()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const U=function(o,m,t){return{itemsPerPage:o,currentPage:m,totalItems:t}};let z=(()=>{class o{constructor(t,n,s,a,c,G){this.http=t,this.message=n,this.commonService=s,this.modalService=a,this.router=c,this.lightbox=G,this.allData=[],this.date="",this.pagination=new u.j,this.search=new r.NI("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(d.l.list_comission,t).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(d.l.managed_comission,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",f.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(d.l.managed_comission,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(O,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(h.e),e.\u0275\u0275directiveInject(C.v),e.\u0275\u0275directiveInject(v.tT),e.\u0275\u0275directiveInject(b.F0),e.\u0275\u0275directiveInject(L.ey))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:37,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"edit-section"],[1,"fa","fa-edit",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(10," Create New commission "),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Founder Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Agent Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Member Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Ambassador Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th"),e.\u0275\u0275text(31,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"tbody"),e.\u0275\u0275template(33,R,16,6,"tr",11),e.\u0275\u0275pipe(34,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(35,V,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(36,J,6,3,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1(" ",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(34,4,n.allData,e.\u0275\u0275pureFunction3(7,U,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[l.NgForOf,l.NgIf,P.b,_.LS,_._s],encapsulation:2}),o})();var $=i(70613);const B=[{path:"",component:z}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.CommonModule,$.m,b.Bz.forChild(B)]}),o})()},82227:(S,p,i)=>{i.d(p,{N:()=>u,j:()=>l});class l{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}class u{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}}}]);
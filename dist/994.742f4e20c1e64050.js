"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[994],{62994:(E,p,r)=>{r.r(p),r.d(p,{CommissionsModule:()=>Y});var a=r(36895),u=r(82227),d=r(92531),f=r(98099),i=r(90433),S=r(77579),e=r(41571),g=r(7849),v=r(3755),h=r(20388),_=r(87564),I=r(57797),x=r(12553),y=r(23277);function k(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function w(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function A(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function T(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function N(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function D(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function j(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function F(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function M(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}function O(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function P(n,m){1&n&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275text(1," Commission should be between 1-100 "),e.\u0275\u0275elementEnd())}let L=(()=>{class n{constructor(o,t,s,l,c){this.fb=o,this.message=t,this.http=s,this.bsModalRef=l,this.commonService=c,this.showError=!1,this.onClose=new S.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({name:["",i.kI.compose([i.kI.required])],agent_commision:["",i.kI.compose([i.kI.required,i.kI.max(100)])],group_owner_commision:["",i.kI.compose([i.kI.required,i.kI.max(100)])],member_commision:["",i.kI.compose([i.kI.required,i.kI.max(100)])],gold_member_commision:["",i.kI.compose([i.kI.required,i.kI.max(100)])],gold_member_plus_commision:["",i.kI.compose([i.kI.required,i.kI.max(100)])]}),this.modalData&&this.patchData(this.modalData)}patchData(o){this.form.patchValue({name:o.name,member_commision:o.member_commision,gold_member_commision:o.gold_member_commision,group_owner_commision:o.group_owner_commision,agent_commision:o.agent_commision,gold_member_plus_commision:o.gold_member_plus_commision})}formSubmit(){if(this.form.valid){const o=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(o._id=this.modalData._id),this.http.postData(d.l.add_edit_comission,o).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?f.H.updatedSuccess:f.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(i.qu),e.\u0275\u0275directiveInject(g.e),e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(h.UZ),e.\u0275\u0275directiveInject(_.v))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-add-account"]],decls:46,vars:16,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","trim","blur","placeholder","Enter name",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"set-label","required"],["formControlName","group_owner_commision","appAmount","","trim","blur","type","text","placeholder","Enter Founder commission",1,"form-control"],["formControlName","agent_commision","appAmount","","trim","blur","type","text","placeholder","Enter agent commission",1,"form-control"],["formControlName","member_commision","appAmount","","trim","blur","type","text","placeholder","Enter member commission",1,"form-control"],["formControlName","gold_member_commision","appAmount","","trim","blur","type","text","placeholder","Enter Ambassador commission",1,"form-control"],["formControlName","gold_member_plus_commision","appAmount","","trim","blur","type","text","placeholder","Enter Ambassador plus commission",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return t.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8," name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,k,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13," Founder commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",10),e.\u0275\u0275template(15,w,2,0,"div",8),e.\u0275\u0275template(16,A,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",5)(18,"label",9),e.\u0275\u0275text(19," agent commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"input",11),e.\u0275\u0275template(21,T,2,0,"div",8),e.\u0275\u0275template(22,N,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",5)(24,"label",9),e.\u0275\u0275text(25," member commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"input",12),e.\u0275\u0275template(27,D,2,0,"div",8),e.\u0275\u0275template(28,j,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",5)(30,"label",9),e.\u0275\u0275text(31,"Ambassador commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(32,"input",13),e.\u0275\u0275template(33,F,2,0,"div",8),e.\u0275\u0275template(34,M,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",5)(36,"label",9),e.\u0275\u0275text(37,"Ambassador plus commission "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(38,"input",14),e.\u0275\u0275template(39,O,2,0,"div",8),e.\u0275\u0275template(40,P,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(41,"div",15)(42,"button",16),e.\u0275\u0275listener("click",function(){return t.bsModalRef.hide()}),e.\u0275\u0275text(43,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"button",17),e.\u0275\u0275text(45),e.\u0275\u0275elementEnd()()()),2&o&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",t.modalData?"Edit":"Create New"," ",t.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.name.errors?null:t.form.controls.name.errors.required)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.group_owner_commision.errors?null:t.form.controls.group_owner_commision.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.group_owner_commision.errors?null:t.form.controls.group_owner_commision.errors.max)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.agent_commision.errors?null:t.form.controls.agent_commision.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.agent_commision.errors?null:t.form.controls.agent_commision.errors.max)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.member_commision.errors?null:t.form.controls.member_commision.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.member_commision.errors?null:t.form.controls.member_commision.errors.max)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.gold_member_commision.errors?null:t.form.controls.gold_member_commision.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.gold_member_commision.errors?null:t.form.controls.gold_member_commision.errors.max)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.gold_member_plus_commision.errors?null:t.form.controls.gold_member_plus_commision.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.gold_member_plus_commision.errors?null:t.form.controls.gold_member_plus_commision.errors.max)&&t.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(t.modalData?"Update":"Submit"))},dependencies:[a.NgIf,I.i,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,x.mh,y.P],encapsulation:2}),n})();var b=r(38867),R=r(81305),V=r(42382),C=r(54333);function J(n,m){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td"),e.\u0275\u0275text(14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"td",14)(16,"div")(17,"i",15),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(o).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.addEditModalOpen(l))}),e.\u0275\u0275elementEnd()()()()}if(2&n){const o=m.$implicit,t=m.index,s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",10*(s.pagination.pageNo-1)+t+1," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.group_owner_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.agent_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.member_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.gold_member_commision),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==o?null:o.gold_member_plus_commision)}}function U(n,m){1&n&&e.\u0275\u0275element(0,"app-no-record")}function z(n,m){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",16)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",17)(5,"pagination-controls",18),e.\u0275\u0275listener("pageChange",function(s){e.\u0275\u0275restoreView(o);const l=e.\u0275\u0275nextContext();return l.pagination.pageNo=s,e.\u0275\u0275resetView(l.getData())}),e.\u0275\u0275elementEnd()()()}if(2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===o.pagination.count?0:o.pagination.skip+1," to ",o.commonService.cal(o.pagination.pageNo,o.pagination.limit,o.pagination.count)," out of ",o.pagination.count," entries ")}}const B=function(n,m,o){return{itemsPerPage:n,currentPage:m,totalItems:o}};let H=(()=>{class n{constructor(o,t,s,l,c,q){this.http=o,this.message=t,this.commonService=s,this.modalService=l,this.router=c,this.lightbox=q,this.allData=[],this.date="",this.pagination=new u.j,this.search=new i.NI("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let o={skip:this.pagination.skip};this.search.value&&(o.search=this.search.value),this.http.getData(d.l.list_comission,o).subscribe(t=>{this.allData=t.data.data,this.pagination.count=t.data.total_count},()=>{})}deleteData(o){this.message.confirm(`delete this ${this.commonService.title}`).then(t=>{t.isConfirmed&&this.http.putData(d.l.managed_comission,{_id:o._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",f.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(o){this.http.putData(d.l.managed_comission,{_id:o._id,is_blocked:!o.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(o)},()=>{})}addEditModalOpen(o){this.modalService.show(L,{initialState:{modalData:o},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(g.e),e.\u0275\u0275directiveInject(_.v),e.\u0275\u0275directiveInject(h.tT),e.\u0275\u0275directiveInject(b.F0),e.\u0275\u0275directiveInject(R.ey))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-accounts"]],decls:39,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"edit-section"],[1,"fa","fa-edit",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return t.addEditModalOpen()}),e.\u0275\u0275text(10," Create New commission "),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Founder Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Agent Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Member Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Ambassador Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th"),e.\u0275\u0275text(31,"Ambassador Plus Commission"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"th"),e.\u0275\u0275text(33,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(34,"tbody"),e.\u0275\u0275template(35,J,18,7,"tr",11),e.\u0275\u0275pipe(36,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(37,U,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(38,z,6,3,"div",13),e.\u0275\u0275elementEnd()()()),2&o&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1(" ",null==t.commonService?null:t.commonService.breadcrumb," "),e.\u0275\u0275advance(29),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(36,4,t.allData,e.\u0275\u0275pureFunction3(7,B,t.pagination.pageSize,t.pagination.pageNo,t.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.pagination.count))},dependencies:[a.NgForOf,a.NgIf,V.b,C.LS,C._s],encapsulation:2}),n})();var $=r(24250);const G=[{path:"",component:H}];let Y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.CommonModule,$.m,b.Bz.forChild(G)]}),n})()},82227:(E,p,r)=>{r.d(p,{N:()=>u,j:()=>a});class a{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}class u{constructor(){this.limit=10,this.pageSize=10,this.skip=0,this.count=0,this.pageNo=1,this.directionLinks=!0,this.rotate=!0}}}}]);
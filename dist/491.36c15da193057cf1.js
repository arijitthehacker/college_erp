"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[491],{2491:(R,g,r)=>{r.r(g),r.d(g,{CustomerLeadsModule:()=>F});var m=r(6895),x=r(2227),d=r(5522),C=r(8099),v=r(7579),e=r(1571),c=r(7849),p=r(388),u=r(7564),f=r(1681);const b=function(a,l,t){return{rejected:a,pending:l,approved:t}};function _(a,l){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"img",10),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.commonService.openLightBox(i.image))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275element(8,"app-see-more",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"td")(15,"label",12),e.\u0275\u0275text(16),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(17,"td"),e.\u0275\u0275element(18,"app-see-more",11),e.\u0275\u0275elementEnd()()}if(2&a){const t=l.$implicit,n=l.index;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+1),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.image||"/assets/images/no-img.webp",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t?null:t.name)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.description),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t?null:t.managed_by)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(13,9,null==t?null:t.managed_at,"short")),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(12,b,"REJECTED"===(null==t?null:t.status_data),"PENDING"===(null==t?null:t.status_data),"APPROVED"===(null==t?null:t.status_data))),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",null==t?null:t.status_data,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.reject_reason)}}let E=(()=>{class a{constructor(t,n,o){this.message=t,this.bsModalRef=n,this.commonService=o,this.onClose=new v.x}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(p.UZ),e.\u0275\u0275directiveInject(u.v))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-add-account"]],decls:31,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],[1,"btn-close",3,"click"],[1,"modal-body"],[1,"row"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-default","mr-3",3,"click"],[1,"small-img",3,"src","click"],[3,"msg"],[1,"status-label",3,"ngClass"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2," Status Details "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th"),e.\u0275\u0275text(11,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"th"),e.\u0275\u0275text(13," Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"th"),e.\u0275\u0275text(15," Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"th"),e.\u0275\u0275text(17," Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"th"),e.\u0275\u0275text(19," Managed By"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21," Manage at"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23," Status"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25," Reject Reason"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(26,"tbody"),e.\u0275\u0275template(27,_,19,16,"tr",7),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(28,"div",8)(29,"button",9),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(30,"Cancel"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",n.modalData))},dependencies:[m.NgClass,m.NgForOf,f.S,m.DatePipe],encapsulation:2}),a})();function D(a,l){if(1&a&&(e.\u0275\u0275elementStart(0,"td")(1,"h5"),e.\u0275\u0275text(2,"Age"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate((null==t.modalData?null:t.modalData.age)||"-")}}let I=(()=>{class a{constructor(t,n,o){this.message=t,this.bsModalRef=n,this.commonService=o,this.onClose=new v.x}ngOnInit(){console.log(this.modalData,"modalData")}}return a.\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(p.UZ),e.\u0275\u0275directiveInject(u.v))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-add-account"]],decls:27,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],[1,"btn-close",3,"click"],[1,"modal-body"],[1,"table","details-table"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-default","mr-3",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",3)(5,"table",4)(6,"tr")(7,"td")(8,"h5"),e.\u0275\u0275text(9,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"td")(13,"h5"),e.\u0275\u0275text(14,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"p"),e.\u0275\u0275text(16),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(17,"tr")(18,"td")(19,"h5"),e.\u0275\u0275text(20,"Phone number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"p"),e.\u0275\u0275text(22),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(23,D,5,1,"td",5),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(24,"div",6)(25,"button",7),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(26,"Close"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",n.showLabel," Details "),e.\u0275\u0275advance(9),e.\u0275\u0275textInterpolate((null==n.modalData?null:n.modalData.name)||"-"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate((null==n.modalData?null:n.modalData.email)||"-"),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate2("",null==n.modalData?null:n.modalData.country_code," ",(null==n.modalData?null:n.modalData.phone_number)||"-",""),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.modalData?null:n.modalData.age))},dependencies:[m.NgIf],encapsulation:2}),a})();var y=r(3755),h=r(8867),k=r(2382),S=r(4333);function M(a,l){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td")(6,"a",14),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.openMemberDetails(null==i?null:i.member_id,"Member"))}),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"td")(9,"a",14),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.openMemberDetails(null==i?null:i.group_owner_id,"Member"))}),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"td")(12,"a",14),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.openMemberDetails(null==i?null:i.agent_id,"Agent "))}),e.\u0275\u0275text(13),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(14,"td"),e.\u0275\u0275text(15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"td")(17,"a",14),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.openStatus(i))}),e.\u0275\u0275text(18,"Status Details"),e.\u0275\u0275elementEnd()()()}if(2&a){const t=l.$implicit,n=l.index,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+o.pagination.pageSize*(o.pagination.page-1)+1),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate((null==t||null==t.member_id?null:t.member_id.name)||"-"),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate((null==t||null==t.group_owner_id?null:t.group_owner_id.name)||"-"),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate((null==t||null==t.agent_id?null:t.agent_id.name)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",null==t?null:t.booking_status," ")}}function L(a,l){1&a&&e.\u0275\u0275element(0,"app-no-record")}function j(a,l){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",15)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",16)(5,"pagination-controls",17),e.\u0275\u0275listener("pageChange",function(o){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return i.pagination.pageNo=o,e.\u0275\u0275resetView(i.getData())}),e.\u0275\u0275elementEnd()()()}if(2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const w=function(a,l,t){return{itemsPerPage:a,currentPage:l,totalItems:t}};let N=(()=>{class a{constructor(t,n,o,i,s){this.http=t,this.message=n,this.commonService=o,this.modalService=i,this.router=s,this.allData=[],this.date="",this.pagination=new x.j}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit,this.http.getData(d.l.list_customer_request,{skip:this.pagination.skip}).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}blockUnblock(t){this.http.putData(d.l.manage_plans,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(d.l.managed_members,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",C.H.deleteSuccess),this.getData()},()=>{})})}openStatus(t){this.modalService.show(E,{initialState:{modalData:t.status},backdrop:"static",keyboard:!1,class:"modal-more-lg"})}openMemberDetails(t,n){t?.name&&this.modalService.show(I,{initialState:{modalData:t,showLabel:n},backdrop:"static",keyboard:!1,class:"modal-md"})}}return a.\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(y.O),e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(u.v),e.\u0275\u0275directiveInject(p.tT),e.\u0275\u0275directiveInject(h.F0))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-accounts"]],decls:37,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"col-md-10"],[1,"col-md-2","sm-input-space"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"my-link",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",0),e.\u0275\u0275element(9,"div",6)(10,"div",7),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Customer Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Member Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Group Owner"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Agent Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Status"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th"),e.\u0275\u0275text(31,"Status"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"tbody"),e.\u0275\u0275template(33,M,19,6,"tr",11),e.\u0275\u0275pipe(34,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(35,L,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(36,j,6,3,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(34,4,n.allData,e.\u0275\u0275pureFunction3(7,w,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[m.NgForOf,m.NgIf,k.b,S.LS,S._s],encapsulation:2}),a})();var T=r(7079);const V=[{path:"",component:N}];let F=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,T.m,h.Bz.forChild(V)]}),a})()}}]);
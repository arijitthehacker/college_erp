"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[613],{7613:(Y,g,o)=>{o.r(g),o.d(g,{LayoutModule:()=>U});var m=o(8867),d=o(6895),e=o(1571),w=o(8099),r=o(433),h=o(388),v=o(3755),u=o(7849),I=o(2553);function b(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," Please enter old password. "),e.\u0275\u0275elementEnd())}function M(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," Please enter new password. "),e.\u0275\u0275elementEnd())}function E(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1,"Please enter confirm password. "),e.\u0275\u0275elementEnd())}let F=(()=>{class t{constructor(n,a,s,l,p){this.bsModalRef=n,this.http=a,this.message=s,this.router=l,this.fb=p,this.show=!1}ngOnInit(){this.makeForm()}makeForm(){this.resetForm=this.fb.group({old_password:["",r.Validators.required],new_password:["",r.Validators.required],changePassword:["",r.Validators.required]})}changePassword(){this.resetForm.valid?this.resetForm.value.new_password!==this.resetForm.value.changePassword?this.message.toast("info","Password and confirmed password not matched!"):this.changePasswordCall():this.show=!0}changePasswordCall(){this.http.postData("",{new_password:this.resetForm.value.new_password,old_password:this.resetForm.value.old_password}).subscribe(a=>{this.bsModalRef.hide(),this.message.toast("success",w.H.updatedSuccess),localStorage.clear(),this.router.navigate(["/login"])},a=>{})}ngOnDestroy(){this.bsModalRef.hide()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(h.UZ),e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(r.FormBuilder))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-change-password"]],decls:29,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],[1,"required"],["autocomplete","off","type","password","formControlName","old_password","name","old_password",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],["autocomplete","off","type","password","formControlName","new_password","name","new_password",1,"form-control",3,"keydown.space"],["autocomplete","off","type","password","formControlName","changePassword","name","changePassword",1,"form-control",3,"keydown.space"],[1,"modal-footer"],["type","button",1,"form-cancel","btn","btn-default","mr-3",3,"click"],["type","submit",1,"btn","btn-outline-primary"],[1,"text-error"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275listener("ngSubmit",function(){return a.changePassword()}),e.\u0275\u0275elementStart(1,"div",1)(2,"h4",2),e.\u0275\u0275text(3,"Change Password"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),e.\u0275\u0275text(9,"Old Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"input",8),e.\u0275\u0275listener("keydown.space",function(l){return l.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,b,2,0,"div",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",5)(13,"div",6)(14,"label",7),e.\u0275\u0275text(15,"New Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"input",10),e.\u0275\u0275listener("keydown.space",function(l){return l.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,M,2,0,"div",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",5)(19,"div",6)(20,"label",7),e.\u0275\u0275text(21,"Confirm Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"input",11),e.\u0275\u0275listener("keydown.space",function(l){return l.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(23,E,2,0,"div",9),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(24,"div",12)(25,"button",13),e.\u0275\u0275listener("click",function(){return a.bsModalRef.hide()}),e.\u0275\u0275text(26,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"button",14),e.\u0275\u0275text(28,"Submit"),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275property("formGroup",a.resetForm),e.\u0275\u0275advance(11),e.\u0275\u0275property("ngIf",(null==a.resetForm.controls.old_password.errors?null:a.resetForm.controls.old_password.errors.required)&&a.show),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==a.resetForm.controls.new_password.errors?null:a.resetForm.controls.new_password.errors.required)&&a.show),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==a.resetForm.controls.changePassword.errors?null:a.resetForm.controls.changePassword.errors.required)&&a.show))},dependencies:[d.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,I.mh],encapsulation:2}),t})();var C=o(1371),y=o(7564),S=o(8816);const x=function(t){return[t]},B=function(t){return{"font-size":t}};function T(t,i){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li")(1,"a",5,6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext().index,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.optionClick(s,1))}),e.\u0275\u0275element(3,"i",7),e.\u0275\u0275elementStart(4,"span",8),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()}if(2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLinkActive","active")("routerLink",e.\u0275\u0275pureFunction1(5,x,"/"+(null==n?null:n.path))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",n.icon)("ngStyle",e.\u0275\u0275pureFunction1(7,B,n.fontSize)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.name)}}function j(t,i){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",17),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext(3).index,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.optionClick(s,3))}),e.\u0275\u0275element(1,"i",18),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext().$implicit,a=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(3,x,"/"+(null==a?null:a.path)+"/"+(null==n?null:n.path))),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",n.icon),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",null==n?null:n.name," ")}}function L(t,i){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",19),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext(3).index,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.optionClick(s,4))}),e.\u0275\u0275element(1,"i",18),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",n.icon),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",null==n?null:n.name," ")}}function N(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"div",13)(1,"div",14),e.\u0275\u0275template(2,j,3,5,"a",15),e.\u0275\u0275template(3,L,3,2,"a",16),e.\u0275\u0275elementEnd()()),2&t){const n=i.$implicit,a=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("id","collapseBasic")("collapse",!a.isCollapsed)("isAnimated",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==n?null:n.path),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=n&&n.path))}}function D(t,i){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li")(1,"a",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext().index,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.optionClick(s,2))}),e.\u0275\u0275element(2,"i",10),e.\u0275\u0275elementStart(3,"span",8),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"i",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,N,4,5,"div",12),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275attribute("aria-expanded",!(null!=n&&n.isCollapsed)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",n.icon),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.name),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",null!=n&&n.isCollapsed?"fa-chevron-up":"fa-chevron-down"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.children)}}function O(t,i){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,T,6,9,"li",4),e.\u0275\u0275template(2,D,7,5,"li",4),e.\u0275\u0275elementContainerEnd()),2&t){const n=i.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=n&&n.children)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.children)}}let A=(()=>{class t{constructor(n,a,s,l,p){this.message=n,this.modalService=a,this.router=s,this.activatedRoute=l,this.commonService=p,this.sideBar=C.jy,this.selectedIndex=0,this.selectedRoute="appointments",this.showSideBar=!1}ngOnInit(){this.selectedRoute=this.router.url,this.setSelectedIndex();let n=0;this.sideBar.forEach((a,s)=>{a.children&&a.children.forEach(l=>{this.router.url==="/"+l.path&&(n=s)})}),this.optionClick(n,2)}setSelectedIndex(){this.sideBar.forEach((n,a)=>{this.selectedRoute==="/"+n.path&&(this.selectedIndex=a)})}logout(){this.message.confirm("Logout").then(n=>{n.isConfirmed&&this.commonService.afterLogout()})}optionClick(n,a){switch(this.selectedIndex!==n&&this.sideBar.forEach(s=>{s.isCollapsed=!1}),this.selectedIndex=n,a){case 1:case 3:this.showSideBar=!1;break;case 2:this.sideBar[n].isCollapsed=!this.sideBar[n].isCollapsed;break;case 4:this.showSideBar=!1,this.logout()}this.showSideBar||(screen.width<=640||window.matchMedia&&window.matchMedia("only screen and (max-width: 640px)").matches)&&(document.getElementById("app-sidebar").style.width="0",document.getElementById("app-content").style["margin-left"]="0")}changePassword(){this.modalService.show(F,{backdrop:"static",keyboard:!1})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(h.tT),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(m.gz),e.\u0275\u0275directiveInject(y.v))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-side-bar"]],decls:4,vars:1,consts:[["data-toggle","sidebar",1,"app-sidebar__overlay"],["id","app-sidebar",1,"app-sidebar"],[1,"app-menu"],[4,"ngFor","ngForOf"],[4,"ngIf"],["href","javascript://",1,"app-menu__item",3,"routerLinkActive","routerLink","click"],["rla","routerLinkActive"],[1,"fa","fa-fw",3,"ngClass","ngStyle"],[1,"app-menu__label"],["aria-controls","collapseBasic",1,"app-menu__item","sub-menu",3,"click"],[1,"fa","fa-fw",3,"ngClass"],[1,"fa",3,"ngClass"],[3,"id","collapse","isAnimated",4,"ngFor","ngForOf"],[3,"id","collapse","isAnimated"],[1,"sub-menu-item","animate__animated","animate__slideInDown"],["routerLinkActive","active","href","javascript://","class","app-menu__item",3,"routerLink","click",4,"ngIf"],["routerLinkActive","active","href","javascript://","class","app-menu__item",3,"click",4,"ngIf"],["routerLinkActive","active","href","javascript://",1,"app-menu__item",3,"routerLink","click"],[1,"inner-icons","fa",3,"ngClass"],["routerLinkActive","active","href","javascript://",1,"app-menu__item",3,"click"]],template:function(n,a){1&n&&(e.\u0275\u0275element(0,"div",0),e.\u0275\u0275elementStart(1,"aside",1)(2,"ul",2),e.\u0275\u0275template(3,O,3,2,"ng-container",3),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",a.sideBar))},dependencies:[d.NgClass,d.NgForOf,d.NgIf,d.NgStyle,m.yS,m.Od,S.Y],encapsulation:2}),t})();var c=o(5522),f=o(9245);function R(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"li",10)(1,"h5",11),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",11),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",11),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"date"),e.\u0275\u0275elementEnd()()),2&t){const n=i.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.title),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.message),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(7,3,null==n?null:n.created_at,"short"))}}function V(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"ul",8),e.\u0275\u0275template(1,R,8,6,"li",9),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.notifications)}}let H=(()=>{class t{constructor(n,a,s,l,p){this.commonService=n,this.router=a,this.message=s,this.http=l,this.modalService=p,this.showSideBar=!0,this.appTitle=C.s.SITE_NAME,this.profileData={},this.notifications=[]}ngOnInit(){this.commonService.getProfileData(),this.getNotifications(),this.getProfileData()}getProfileData(){this.http.getData(c.l.access_token_login,{},!0).subscribe(n=>{console.log(n,"56666666666666666666666666666")})}getMessage(){this.commonService.getMessage().subscribe(n=>{})}onShown(){console.log("aaaaaa","isOpenChangeisOpenChangeisOpenChange"),this.getNotifications()}getNotifications(){this.http.getData(c.l.list_notification,{},!0).subscribe(n=>{this.notifications=n.data,console.log(this.notifications)})}readNotifications(){this.http.putData(c.l.read_notification).subscribe(n=>{console.log(n,"res")})}clearNotifications(){this.http.putData(c.l.clear_notification).subscribe(n=>{console.log(n,"res")})}apiHit(){let n={device_token:localStorage.getItem("device_token"),message:"hiiiii"};this.http.postData(c.l.send_custom_notification,n).subscribe(a=>{console.log(a,"http")})}logout(){this.message.confirm("Logout").then(n=>{n.isConfirmed&&this.commonService.afterLogout()})}closeNav(){this.showSideBar?(document.getElementById("app-sidebar").style.width="230px",document.getElementById("app-content").style["margin-left"]="230px"):(document.getElementById("app-sidebar").style.width="56px",document.getElementById("app-content").style["margin-left"]="53px")}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(y.v),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(v.O),e.\u0275\u0275directiveInject(h.tT))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-header"]],decls:10,vars:1,consts:[[1,"app-header"],["href","javascript://",1,"app-header__logo"],[1,"app-nav"],[1,"btn","btn-primary",3,"click"],[1,"item_btn","header-right-side"],["dropdown","","placement","bottom left",3,"onShown"],["src","/assets/images/noti-icon.png","href","","id","basic-link","dropdownToggle","","aria-controls","basic-link-dropdown"],["id","basic-link-dropdown ","class","dropdown-menu dropdown-menu-left","role","menu","aria-labelledby","basic-link",4,"dropdownMenu"],["id","basic-link-dropdown ","role","menu","aria-labelledby","basic-link",1,"dropdown-menu","dropdown-menu-left"],["class","noti-list row",4,"ngFor","ngForOf"],[1,"noti-list","row"],[1,"col-md-12"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"header",0)(1,"a",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",2)(4,"button",3),e.\u0275\u0275listener("click",function(){return a.apiHit()}),e.\u0275\u0275text(5,"Push"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li",4)(7,"div",5),e.\u0275\u0275listener("onShown",function(){return a.onShown()}),e.\u0275\u0275element(8,"img",6),e.\u0275\u0275template(9,V,2,1,"ul",7),e.\u0275\u0275elementEnd()()()()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",(null==a.profileData?null:a.profileData.name)||a.appTitle,"\n"))},dependencies:[d.NgForOf,f.Hz,f.Mq,f.TO,d.DatePipe],encapsulation:2}),t})();const $=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-layout"]],decls:6,vars:0,consts:[[1,"app","sidebar-mini"],["id","app-content",1,"app-content"],[1,"container-fluid","mt-3","every-page-top"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-header")(2,"app-side-bar"),e.\u0275\u0275elementStart(3,"main",1)(4,"div",2),e.\u0275\u0275element(5,"router-outlet"),e.\u0275\u0275elementEnd()()())},dependencies:[m.lC,A,H],encapsulation:2}),t})(),children:[{path:"",redirectTo:"/owners",pathMatch:"full"},{path:"owners",loadChildren:()=>Promise.all([o.e(592),o.e(47)]).then(o.bind(o,5047)).then(t=>t.OwnersModule),data:{breadcrumb:"Owners",title:"owner"}},{path:"agents",loadChildren:()=>Promise.all([o.e(592),o.e(455)]).then(o.bind(o,4455)).then(t=>t.AgentsModule),data:{breadcrumb:"Agents",title:"agent"}},{path:"members",loadChildren:()=>Promise.all([o.e(592),o.e(155)]).then(o.bind(o,8155)).then(t=>t.MembersModule),data:{breadcrumb:"Members",title:"member"}},{path:"properties",loadChildren:()=>Promise.all([o.e(592),o.e(120)]).then(o.bind(o,7120)).then(t=>t.PropertiesModule),data:{breadcrumb:"Properties",title:"property"}},{path:"budgets",loadChildren:()=>Promise.all([o.e(592),o.e(855)]).then(o.bind(o,4855)).then(t=>t.BudgetsModule),data:{breadcrumb:"Property Budgets",title:"budget"}},{path:"settings",loadChildren:()=>o.e(670).then(o.bind(o,2670)).then(t=>t.SettingsModule),data:{breadcrumb:"Settings",title:"setting"}},{path:"purposes",loadChildren:()=>Promise.all([o.e(592),o.e(945)]).then(o.bind(o,3945)).then(t=>t.PurposesModule),data:{breadcrumb:"Property Purposes",title:"purpose"}},{path:"reasons",loadChildren:()=>Promise.all([o.e(592),o.e(43)]).then(o.bind(o,6043)).then(t=>t.ReasonsModule),data:{breadcrumb:"Reject Reasons",title:"reason"}},{path:"profile",loadChildren:()=>o.e(76).then(o.bind(o,4076)).then(t=>t.ProfileModule),data:{breadcrumb:"Admin profile",title:"profile"}},{path:"pending-payment",loadChildren:()=>Promise.all([o.e(592),o.e(431)]).then(o.bind(o,7431)).then(t=>t.PendingPaymentModule),data:{breadcrumb:"Pending Payments",title:"Pending Payments"}},{path:"transaction-history",loadChildren:()=>Promise.all([o.e(592),o.e(72)]).then(o.bind(o,2072)).then(t=>t.TransactionHistoryModule),data:{breadcrumb:"Transaction History",title:"Transaction History"}},{path:"advance-request",loadChildren:()=>Promise.all([o.e(592),o.e(621)]).then(o.bind(o,4621)).then(t=>t.AdvanceRequestModule),data:{breadcrumb:"Advance Request",title:"Advance Request"}},{path:"developers",loadChildren:()=>Promise.all([o.e(592),o.e(624)]).then(o.bind(o,3624)).then(t=>t.DevelopersModule),data:{breadcrumb:"Developers",title:"developer"}},{path:"commissions",loadChildren:()=>Promise.all([o.e(592),o.e(994)]).then(o.bind(o,2994)).then(t=>t.CommissionsModule),data:{breadcrumb:"Commissions",title:"commission"}},{path:"change-password",loadChildren:()=>o.e(233).then(o.bind(o,6233)).then(t=>t.ChangePasswordModule),data:{breadcrumb:"Change Password",title:"Change Password"}},{path:"add-new-property",loadChildren:()=>Promise.all([o.e(592),o.e(88)]).then(o.bind(o,4088)).then(t=>t.AddNewPropertyModule),data:{breadcrumb:"Developers",title:"developer"}},{path:"info-pages/:type",loadChildren:()=>o.e(202).then(o.bind(o,1202)).then(t=>t.InfoPagesModule),data:{breadcrumb:"Info pages",title:"info pages"}},{path:"customer-leads",loadChildren:()=>Promise.all([o.e(592),o.e(901)]).then(o.bind(o,9901)).then(t=>t.CustomerLeadsModule),data:{breadcrumb:"Customer leads",title:"customer-leads"}},{path:"property-categories",loadChildren:()=>Promise.all([o.e(592),o.e(423)]).then(o.bind(o,9423)).then(t=>t.PropertyCategoriesModule),data:{breadcrumb:"Property Categories",title:"property category"}}]}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,m.Bz.forChild($),m.Bz]}),t})();var P=o(6834);let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,P.m,r.FormsModule]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,z,h.zk.forRoot(),G,r.ReactiveFormsModule,S.f,P.m]}),t})()}}]);
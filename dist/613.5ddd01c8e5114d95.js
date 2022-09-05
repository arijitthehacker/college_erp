"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[613],{7613:(R,h,a)=>{a.r(h),a.d(h,{LayoutModule:()=>O});var l=a(8867),m=a(6895),e=a(1571),v=a(8099),r=a(433),p=a(388),f=a(3755),c=a(7849),C=a(2553);function w(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," Please enter old password. "),e.\u0275\u0275elementEnd())}function y(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," Please enter new password. "),e.\u0275\u0275elementEnd())}function S(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1,"Please enter confirm password. "),e.\u0275\u0275elementEnd())}let I=(()=>{class t{constructor(n,o,i,d,u){this.bsModalRef=n,this.http=o,this.message=i,this.router=d,this.fb=u,this.show=!1}ngOnInit(){this.makeForm()}makeForm(){this.resetForm=this.fb.group({old_password:["",r.Validators.required],new_password:["",r.Validators.required],changePassword:["",r.Validators.required]})}changePassword(){this.resetForm.valid?this.resetForm.value.new_password!==this.resetForm.value.changePassword?this.message.toast("info","Password and confirmed password not matched!"):this.changePasswordCall():this.show=!0}changePasswordCall(){this.http.postData("",{new_password:this.resetForm.value.new_password,old_password:this.resetForm.value.old_password}).subscribe(o=>{this.bsModalRef.hide(),this.message.toast("success",v.H.updatedSuccess),localStorage.clear(),this.router.navigate(["/login"])},o=>{})}ngOnDestroy(){this.bsModalRef.hide()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(p.UZ),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(l.F0),e.\u0275\u0275directiveInject(r.FormBuilder))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-change-password"]],decls:29,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],[1,"required"],["autocomplete","off","type","password","formControlName","old_password","name","old_password",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],["autocomplete","off","type","password","formControlName","new_password","name","new_password",1,"form-control",3,"keydown.space"],["autocomplete","off","type","password","formControlName","changePassword","name","changePassword",1,"form-control",3,"keydown.space"],[1,"modal-footer"],["type","button",1,"form-cancel","btn","btn-default","mr-3",3,"click"],["type","submit",1,"btn","btn-outline-primary"],[1,"text-error"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275listener("ngSubmit",function(){return o.changePassword()}),e.\u0275\u0275elementStart(1,"div",1)(2,"h4",2),e.\u0275\u0275text(3,"Change Password"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),e.\u0275\u0275text(9,"Old Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"input",8),e.\u0275\u0275listener("keydown.space",function(d){return d.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,w,2,0,"div",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",5)(13,"div",6)(14,"label",7),e.\u0275\u0275text(15,"New Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"input",10),e.\u0275\u0275listener("keydown.space",function(d){return d.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,y,2,0,"div",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",5)(19,"div",6)(20,"label",7),e.\u0275\u0275text(21,"Confirm Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"input",11),e.\u0275\u0275listener("keydown.space",function(d){return d.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(23,S,2,0,"div",9),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(24,"div",12)(25,"button",13),e.\u0275\u0275listener("click",function(){return o.bsModalRef.hide()}),e.\u0275\u0275text(26,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"button",14),e.\u0275\u0275text(28,"Submit"),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275property("formGroup",o.resetForm),e.\u0275\u0275advance(11),e.\u0275\u0275property("ngIf",(null==o.resetForm.controls.old_password.errors?null:o.resetForm.controls.old_password.errors.required)&&o.show),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==o.resetForm.controls.new_password.errors?null:o.resetForm.controls.new_password.errors.required)&&o.show),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==o.resetForm.controls.changePassword.errors?null:o.resetForm.controls.changePassword.errors.required)&&o.show))},dependencies:[m.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,C.mh],encapsulation:2}),t})();var g=a(1371);const P=function(t){return[t]};function b(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"li")(1,"a",4),e.\u0275\u0275element(2,"i",5),e.\u0275\u0275elementStart(3,"span",6),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()()),2&t){const n=s.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(4,P,"/"+(null==n?null:n.path))),e.\u0275\u0275advance(1),e.\u0275\u0275classMap(n.icon),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.name)}}let M=(()=>{class t{constructor(n,o,i,d){this.message=n,this.modalService=o,this.router=i,this.activatedRoute=d,this.sideBar=g.j,this.selectedIndex=0,this.selectedRoute="appointments"}ngOnInit(){this.selectedRoute=this.router.url,this.setSelectedIndex()}setSelectedIndex(){this.sideBar.forEach((n,o)=>{this.selectedRoute==="/"+n.path&&(this.selectedIndex=o)})}optionClick(n){this.selectedIndex=n,(screen.width<=640||window.matchMedia&&window.matchMedia("only screen and (max-width: 640px)").matches)&&(document.getElementById("app-sidebar").style.width="0",document.getElementById("app-content").style["margin-left"]="0")}changePassword(){this.modalService.show(I,{backdrop:"static",keyboard:!1})}logout(){this.message.confirm("Logout").then(n=>{n.isConfirmed&&(localStorage.clear(),this.router.navigate(["/login"]))})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(p.tT),e.\u0275\u0275directiveInject(l.F0),e.\u0275\u0275directiveInject(l.gz))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-side-bar"]],decls:4,vars:1,consts:[["data-toggle","sidebar",1,"app-sidebar__overlay"],["id","app-sidebar",1,"app-sidebar"],[1,"app-menu"],[4,"ngFor","ngForOf"],["routerLinkActive","active","href","javascript://",1,"app-menu__item",3,"routerLink"],["aria-hidden","true",1,"app-menu__icon"],[1,"app-menu__label"]],template:function(n,o){1&n&&(e.\u0275\u0275element(0,"div",0),e.\u0275\u0275elementStart(1,"aside",1)(2,"ul",2),e.\u0275\u0275template(3,b,5,6,"li",3),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",o.sideBar))},dependencies:[m.NgForOf,l.yS,l.Od],encapsulation:2}),t})();var F=a(7564);function E(t,s){1&t&&e.\u0275\u0275element(0,"img",10)}function j(t,s){1&t&&e.\u0275\u0275element(0,"img",11)}let B=(()=>{class t{constructor(n,o,i,d,u){this.commonService=n,this.router=o,this.message=i,this.http=d,this.modalService=u,this.showSideBar=!0,this.appTitle=g.s.SITE_NAME,this.profileData={},this.officeName=localStorage.getItem("officeName")}ngOnInit(){this.commonService.getProfileData()}getMessage(){this.commonService.getMessage().subscribe(n=>{})}showHeadingName(){}logout(){this.message.confirm("Logout").then(n=>{n.isConfirmed&&this.commonService.afterLogout()})}closeNav(){this.showSideBar?(document.getElementById("app-sidebar").style.width="230px",document.getElementById("app-content").style["margin-left"]="230px"):(document.getElementById("app-sidebar").style.width="56px",document.getElementById("app-content").style["margin-left"]="53px")}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(F.v),e.\u0275\u0275directiveInject(l.F0),e.\u0275\u0275directiveInject(c.e),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(p.tT))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-header"]],decls:12,vars:4,consts:[[1,"app-header"],["href","javascript://",1,"app-header__logo"],["href","javascript://","data-toggle","sidebar","aria-label","Hide Sidebar",1,"app-sidebar__toggle",3,"click"],["src","/assets/images/menu-close.png","style","padding-top: 11px;",4,"ngIf"],["src","/assets/images/menu-open.png","style","padding-top: 11px;",4,"ngIf"],[1,"app-nav"],[1,"item_btn"],[1,"top-name"],[1,"item_btn","header-right-side"],["src","assets/images/header-logout.png",3,"click"],["src","/assets/images/menu-close.png",2,"padding-top","11px"],["src","/assets/images/menu-open.png",2,"padding-top","11px"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"header",0)(1,"a",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"a",2),e.\u0275\u0275listener("click",function(){return o.showSideBar=!o.showSideBar,o.closeNav()}),e.\u0275\u0275template(4,E,1,0,"img",3),e.\u0275\u0275template(5,j,1,0,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"ul",5)(7,"li",6)(8,"h4",7),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"li",8)(11,"img",9),e.\u0275\u0275listener("click",function(){return o.logout()}),e.\u0275\u0275elementEnd()()()()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",(null==o.profileData?null:o.profileData.name)||o.appTitle,"\n"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",o.showSideBar),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.showSideBar),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(o.officeName))},dependencies:[m.NgIf],encapsulation:2}),t})();const N=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-layout"]],decls:6,vars:0,consts:[[1,"app","sidebar-mini"],["id","app-content",1,"app-content"],[1,"container-fluid","mt-3","every-page-top"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-header")(2,"app-side-bar"),e.\u0275\u0275elementStart(3,"main",1)(4,"div",2),e.\u0275\u0275element(5,"router-outlet"),e.\u0275\u0275elementEnd()()())},dependencies:[l.lC,M,B],encapsulation:2}),t})(),children:[{path:"",redirectTo:"/owners",pathMatch:"full"},{path:"owners",loadChildren:()=>Promise.all([a.e(592),a.e(801)]).then(a.bind(a,9801)).then(t=>t.OwnersModule),data:{breadcrumb:"Owners",title:"owner"}},{path:"agents",loadChildren:()=>Promise.all([a.e(592),a.e(455)]).then(a.bind(a,4455)).then(t=>t.AgentsModule),data:{breadcrumb:"Agents",title:"agent"}},{path:"members",loadChildren:()=>Promise.all([a.e(592),a.e(155)]).then(a.bind(a,8155)).then(t=>t.MembersModule),data:{breadcrumb:"Members",title:"member"}},{path:"customer-leads",loadChildren:()=>Promise.all([a.e(592),a.e(607)]).then(a.bind(a,9607)).then(t=>t.CustomerLeadsModule),data:{breadcrumb:"Customer leads",title:"customer-leads"}},{path:"property-categories",loadChildren:()=>Promise.all([a.e(592),a.e(423)]).then(a.bind(a,9423)).then(t=>t.PropertyCategoriesModule),data:{breadcrumb:"Property Categories",title:"property category"}}]}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,l.Bz.forChild(N),l.Bz]}),t})();var L=a(1469);let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,L.m,r.FormsModule]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,T,p.zk.forRoot(),x,r.ReactiveFormsModule]}),t})()}}]);
"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[394],{46394:(D,c,i)=>{i.r(c),i.d(c,{LoginModule:()=>x});var r=i(90433),p=i(38867),m=i(36895),f=i(92531),w=i(77579),e=i(41571),y=i(7849),u=i(3755),g=i(20388),v=i(87564),h=i(12553);function C(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function E(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," Please enter valid email! "),e.\u0275\u0275elementEnd())}let b=(()=>{class n{constructor(o,t,l,a,d){this.fb=o,this.message=t,this.http=l,this.modalRef=a,this.commonService=d,this.showError=!1,this.onClose=new w.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({email:["",[r.kI.required,r.kI.email]]}),this.modalData&&this.patchData(this.modalData)}patchData(o){this.form.patchValue({email:o.email})}formSubmit(){if(this.form.valid){const o=JSON.parse(JSON.stringify(this.form.value));this.http.getData(f.l.getResetPasswordToken,o).subscribe(t=>{this.onClose.next(null),this.message.toast("success",t.data),this.modalRef.hide()},()=>{})}else this.showError=!0}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(r.qu),e.\u0275\u0275directiveInject(y.e),e.\u0275\u0275directiveInject(u.O),e.\u0275\u0275directiveInject(g.UZ),e.\u0275\u0275directiveInject(v.v))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-add-account"]],decls:19,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","email","type","email","placeholder","Enter Email",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],[1,"modal-footer"],[1,"col-md-12"],["type","submit",1,"btn-blue","w-100"],[1,"text-error"]],template:function(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2," Forgot Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return null==t.modalRef?null:t.modalRef.hide()}),e.\u0275\u0275elementStart(4,"span",3),e.\u0275\u0275text(5,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(6,"form",4),e.\u0275\u0275listener("ngSubmit",function(){return t.formSubmit()}),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e.\u0275\u0275text(11,"Email Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"input",9),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(13,C,2,0,"div",10),e.\u0275\u0275template(14,E,2,0,"div",10),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(15,"div",11)(16,"div",12)(17,"button",13),e.\u0275\u0275text(18,"Send reset code to this email address"),e.\u0275\u0275elementEnd()()()()),2&o&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.email)&&t.showError))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,h.mh,m.NgIf],encapsulation:2}),n})();var S=i(41371);function I(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",19),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function k(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",19),e.\u0275\u0275text(1," Please enter valid email! "),e.\u0275\u0275elementEnd())}function T(n,s){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",20),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(o);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.showPass=!1)}),e.\u0275\u0275elementEnd()}}function P(n,s){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(o);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.showPass=!0)}),e.\u0275\u0275elementEnd()}}function L(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",19),e.\u0275\u0275text(1,"Please enter password! "),e.\u0275\u0275elementEnd())}let F=(()=>{class n{constructor(o,t,l,a,d){this.fb=o,this.http=t,this.commonService=l,this.router=a,this.modalService=d,this.show=!1,this.appTitle=S.s.SITE_NAME,this.showPass=!1}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({email:["",[r.kI.required,r.kI.pattern(S.s.email_pattern)]],password:["",r.kI.required]})}formSubmit(){if(this.form.valid){const o=JSON.parse(JSON.stringify(this.form.value));this.http.postData(f.l.login,o).subscribe(t=>{this.commonService.setToken(t.accessToken),localStorage.setItem("profileData",JSON.stringify(t.data)),this.router.navigate(["/owners"])},()=>{})}else this.show=!0}openForgotPassword(o){this.modalService.show(b,{initialState:{modalData:{email:this.form.value.email}},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{})}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(r.qu),e.\u0275\u0275directiveInject(u.O),e.\u0275\u0275directiveInject(v.v),e.\u0275\u0275directiveInject(p.F0),e.\u0275\u0275directiveInject(g.tT))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-login"]],decls:28,vars:7,consts:[[1,"col-md-12"],[1,"login","back"],[1,"box"],[1,"right"],[1,"text-center"],[1,"text-center","login-heading"],[1,"set-form-area",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"login-label","required"],["formControlName","email","type","email","placeholder","Enter Email Address",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],[1,"eye-icons"],["src","/assets/images/eye-on.jpg",3,"click",4,"ngIf"],["src","/assets/images/eye-off.png",3,"click",4,"ngIf"],["placeholder","Enter Password","formControlName","password",1,"form-control",3,"type","keydown.space"],[1,"row","forgot-text"],[1,"col-md-6"],["type","submit",1,"btn-blue","w-100"],["src","/assets/images/check-circle.png"],[1,"text-error"],["src","/assets/images/eye-on.jpg",3,"click"],["src","/assets/images/eye-off.png",3,"click"]],template:function(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3),e.\u0275\u0275element(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275text(6," Login to your admin "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"form",6),e.\u0275\u0275listener("ngSubmit",function(){return t.formSubmit()}),e.\u0275\u0275elementStart(8,"div",7)(9,"label",8),e.\u0275\u0275text(10,"Email Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"input",9),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(12,I,2,0,"div",10),e.\u0275\u0275template(13,k,2,0,"div",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",7)(15,"label",8),e.\u0275\u0275text(16,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",11),e.\u0275\u0275template(18,T,1,0,"img",12),e.\u0275\u0275template(19,P,1,0,"img",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"input",14),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(21,L,2,0,"div",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",15),e.\u0275\u0275element(23,"div",16)(24,"div",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"button",17),e.\u0275\u0275element(26,"img",18),e.\u0275\u0275text(27," Login "),e.\u0275\u0275elementEnd()()()()()()),2&o&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.required)&&t.show),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.pattern)&&t.show),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("type",t.showPass?"text":"password"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.password.errors?null:t.form.controls.password.errors.required)&&t.show))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,h.mh,m.NgIf],encapsulation:2}),n})();var _=i(24250);const j=[{path:"",component:F}];let x=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[_.m,m.CommonModule,r.UX,p.Bz.forChild(j)]}),n})()}}]);
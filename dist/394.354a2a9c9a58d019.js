"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[394],{46394:(x,c,i)=>{i.r(c),i.d(c,{LoginModule:()=>j});var r=i(90433),p=i(38867),m=i(36895),u=i(92531),S=i(77579),e=i(41571),w=i(7849),f=i(3755),g=i(20388),v=i(87564),h=i(12553);function C(o,s){1&o&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function y(o,s){1&o&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," Please enter valid email! "),e.\u0275\u0275elementEnd())}let E=(()=>{class o{constructor(n,t,l,a,d){this.fb=n,this.message=t,this.http=l,this.modalRef=a,this.commonService=d,this.showError=!1,this.onClose=new S.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({email:["",[r.Validators.required,r.Validators.email]]}),this.modalData&&this.patchData(this.modalData)}patchData(n){this.form.patchValue({email:n.email})}formSubmit(){if(this.form.valid){const n=JSON.parse(JSON.stringify(this.form.value));this.http.getData(u.l.getResetPasswordToken,n).subscribe(t=>{this.onClose.next(null),this.message.toast("success",t.data),this.modalRef.hide()},()=>{})}else this.showError=!0}}return o.\u0275fac=function(n){return new(n||o)(e.\u0275\u0275directiveInject(r.FormBuilder),e.\u0275\u0275directiveInject(w.e),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(g.UZ),e.\u0275\u0275directiveInject(v.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:19,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","email","type","email","placeholder","Enter Email",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],[1,"modal-footer"],[1,"col-md-12"],["type","submit",1,"btn-blue","w-100"],[1,"text-error"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2," Forgot Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return null==t.modalRef?null:t.modalRef.hide()}),e.\u0275\u0275elementStart(4,"span",3),e.\u0275\u0275text(5,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(6,"form",4),e.\u0275\u0275listener("ngSubmit",function(){return t.formSubmit()}),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e.\u0275\u0275text(11,"Email Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"input",9),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(13,C,2,0,"div",10),e.\u0275\u0275template(14,y,2,0,"div",10),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(15,"div",11)(16,"div",12)(17,"button",13),e.\u0275\u0275text(18,"Send reset code to this email address"),e.\u0275\u0275elementEnd()()()()),2&n&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.required)&&t.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.email)&&t.showError))},dependencies:[r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,h.mh,m.NgIf],encapsulation:2}),o})();var b=i(41371);function I(o,s){1&o&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function F(o,s){1&o&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1," Please enter valid email! "),e.\u0275\u0275elementEnd())}function T(o,s){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.showPass=!1)}),e.\u0275\u0275elementEnd()}}function P(o,s){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",22),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.showPass=!0)}),e.\u0275\u0275elementEnd()}}function N(o,s){1&o&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1,"Please enter password! "),e.\u0275\u0275elementEnd())}let k=(()=>{class o{constructor(n,t,l,a,d){this.fb=n,this.http=t,this.commonService=l,this.router=a,this.modalService=d,this.show=!1,this.appTitle=b.s.SITE_NAME,this.showPass=!1}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({email:["",[r.Validators.required,r.Validators.email]],password:["",r.Validators.required]})}formSubmit(){if(this.form.valid){const n=JSON.parse(JSON.stringify(this.form.value));this.http.postData(u.l.login,n).subscribe(t=>{this.commonService.setToken(t.data.access_token),t.data.email=this.form.value.email,localStorage.setItem("profileData",JSON.stringify(t.data)),this.router.navigate(["/owners"])},()=>{})}else this.show=!0}openForgotPassword(n){this.modalService.show(E,{initialState:{modalData:{email:this.form.value.email}},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{})}}return o.\u0275fac=function(n){return new(n||o)(e.\u0275\u0275directiveInject(r.FormBuilder),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(v.v),e.\u0275\u0275directiveInject(p.F0),e.\u0275\u0275directiveInject(g.tT))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-login"]],decls:29,vars:7,consts:[[1,"col-md-12"],[1,"login","back"],[1,"box"],[1,"right"],[1,"text-center"],["src","/assets/images/logo.png",1,""],[1,"text-center","login-heading"],[1,"set-form-area",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"login-label","required"],["formControlName","email","type","email","placeholder","Enter Email Address",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],[1,"eye-icons"],["src","/assets/images/eye-on.jpg",3,"click",4,"ngIf"],["src","/assets/images/eye-off.png",3,"click",4,"ngIf"],["placeholder","Enter Password","formControlName","password",1,"form-control",3,"type","keydown.space"],[1,"row","forgot-text"],[1,"col-md-6"],["type","submit",1,"btn-blue","w-100"],["src","/assets/images/check-circle.png"],[1,"text-error"],["src","/assets/images/eye-on.jpg",3,"click"],["src","/assets/images/eye-off.png",3,"click"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),e.\u0275\u0275element(5,"img",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",6),e.\u0275\u0275text(7," Login to your admin "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"form",7),e.\u0275\u0275listener("ngSubmit",function(){return t.formSubmit()}),e.\u0275\u0275elementStart(9,"div",8)(10,"label",9),e.\u0275\u0275text(11,"Email Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"input",10),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(13,I,2,0,"div",11),e.\u0275\u0275template(14,F,2,0,"div",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",8)(16,"label",9),e.\u0275\u0275text(17,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"div",12),e.\u0275\u0275template(19,T,1,0,"img",13),e.\u0275\u0275template(20,P,1,0,"img",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"input",15),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(22,N,2,0,"div",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",16),e.\u0275\u0275element(24,"div",17)(25,"div",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"button",18),e.\u0275\u0275element(27,"img",19),e.\u0275\u0275text(28," Login "),e.\u0275\u0275elementEnd()()()()()()),2&n&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.required)&&t.show),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.email.errors?null:t.form.controls.email.errors.email)&&t.show),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("type",t.showPass?"text":"password"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.password.errors?null:t.form.controls.password.errors.required)&&t.show))},dependencies:[r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,h.mh,m.NgIf],encapsulation:2}),o})();var L=i(53470);const _=[{path:"",component:k}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[L.m,m.CommonModule,r.ReactiveFormsModule,p.Bz.forChild(_)]}),o})()}}]);
"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[954],{46954:(I,d,s)=>{s.r(d),s.d(d,{UpdatePasswordModule:()=>S});var l=s(36895),i=s(90433),c=s(92531),e=s(41571),p=s(7849),m=s(38867),u=s(3755),f=s(12553);function g(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",18),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.showPass=!1)}),e.\u0275\u0275elementEnd()}}function w(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",19),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.showPass=!0)}),e.\u0275\u0275elementEnd()}}function h(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1," Please enter password! "),e.\u0275\u0275elementEnd())}function v(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",20),e.\u0275\u0275text(1," Please enter confirm password! "),e.\u0275\u0275elementEnd())}function _(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",7),e.\u0275\u0275text(2," Update Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"form",8),e.\u0275\u0275listener("ngSubmit",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.formSubmit())}),e.\u0275\u0275elementStart(4,"div",9)(5,"label"),e.\u0275\u0275text(6,"New Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",10),e.\u0275\u0275template(8,g,1,0,"img",11),e.\u0275\u0275template(9,w,1,0,"img",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"input",13),e.\u0275\u0275listener("keydown.space",function(o){return o.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,h,2,0,"div",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",15)(13,"label"),e.\u0275\u0275text(14,"Confirm Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"input",16),e.\u0275\u0275listener("keydown.space",function(o){return o.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(16,v,2,0,"div",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",17),e.\u0275\u0275text(18," Update Password "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementContainerEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.showPass),e.\u0275\u0275advance(1),e.\u0275\u0275property("type",t.showPass?"text":"password"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.password.errors?null:t.form.controls.password.errors.required)&&t.show),e.\u0275\u0275advance(4),e.\u0275\u0275property("type",t.showPass?"text":"password"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==t.form.controls.confirmPassword.errors?null:t.form.controls.confirmPassword.errors.required)&&t.show)}}function P(n,r){1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",21),e.\u0275\u0275element(2,"img",22),e.\u0275\u0275elementStart(3,"h4",23),e.\u0275\u0275text(4,"Done !"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"h6"),e.\u0275\u0275text(6,"Password Updated Successfully!"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementContainerEnd())}let C=(()=>{class n{constructor(t,a,o,U,E){this.fb=t,this.message=a,this.router=o,this.http=U,this.activatedRoute=E,this.show=!1,this.showPass=!1,this.showSuccess=!1}ngOnInit(){localStorage.clear(),this.activatedRoute.queryParams.subscribe(t=>{this.email=t.email}),this.makeForm()}makeForm(){this.form=this.fb.group({password:["",i.Validators.required],confirmPassword:["",i.Validators.required]})}formSubmit(){this.show=!0,this.form.valid&&(this.form.value.password===this.form.value.confirmPassword?this.http.postData(c.l.update_password,{password:this.form.value.password,email:this.email}).subscribe(a=>{this.showSuccess=!0},()=>{}):this.message.alert("info","Password and confirm password not matched!"))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(i.FormBuilder),e.\u0275\u0275directiveInject(p.e),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(u.O),e.\u0275\u0275directiveInject(m.gz))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-reset-password"]],decls:8,vars:2,consts:[[1,"col-md-12"],[1,"login","back"],[1,"box"],[1,"right"],["routerLink","/",1,"text-center"],["src","/assets/images/logo.png",1,""],[4,"ngIf"],[1,"text-center","login-heading"],[1,"set-form-area",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"eye-icons"],["src","/assets/images/eye-on.jpg",3,"click",4,"ngIf"],["src","/assets/images/eye-off.png",3,"click",4,"ngIf"],["placeholder","Enter New Password","formControlName","password",1,"form-control",3,"type","keydown.space"],["class","text-error",4,"ngIf"],[1,"form-group","pass"],["placeholder","Enter Password Again","formControlName","confirmPassword",1,"form-control",3,"type","keydown.space"],["type","submit",1,"btn-blue","w-100"],["src","/assets/images/eye-on.jpg",3,"click"],["src","/assets/images/eye-off.png",3,"click"],[1,"text-error"],[1,"success-pass"],["src","/assets/images/pass-success.png"],[1,"blue-text"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),e.\u0275\u0275element(5,"img",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,_,19,7,"ng-container",6),e.\u0275\u0275template(7,P,7,0,"ng-container",6),e.\u0275\u0275elementEnd()()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",!a.showSuccess),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.showSuccess))},dependencies:[l.NgIf,m.rH,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,f.mh],encapsulation:2}),n})();var x=s(53470);const y=[{path:"",component:C}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.CommonModule,m.Bz.forChild(y),x.m]}),n})()}}]);
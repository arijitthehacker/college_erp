"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[76],{4076:(j,s,o)=>{o.r(s),o.d(s,{ProfileModule:()=>P});var d=o(6895),f=o(8867),c=o(7343),l=o(433),u=o(8099),p=o(5522),e=o(1571),v=o(7849),h=o(3755),g=o(388),S=o(7564),C=o(2553);function E(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function I(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1," Please enter valid email! "),e.\u0275\u0275elementEnd())}const y=[{path:"",component:(()=>{class t{constructor(n,r,m,a,b,N){this.fb=n,this.message=r,this.http=m,this.bsModalRef=a,this.commonService=b,this.activatedRoute=N,this.showError=!1,localStorage.getItem("profileData")&&(this.profileData=JSON.parse(localStorage.getItem("profileData")))}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({email:[this.profileData?.email,l.Validators.required]})}formSubmit(){if(this.form.valid){const n=JSON.parse(JSON.stringify(this.form.value));this.http.postData(p.l.update_profile,n).subscribe(()=>{this.message.toast("success",u.H.updatedSuccess)},()=>{})}else this.showError=!0}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(l.FormBuilder),e.\u0275\u0275directiveInject(v.e),e.\u0275\u0275directiveInject(h.O),e.\u0275\u0275directiveInject(g.UZ),e.\u0275\u0275directiveInject(S.v),e.\u0275\u0275directiveInject(f.gz))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-add-account"]],decls:24,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"modal-footer"],[1,"row","mt-3","mb-2"],[1,"form-group","col-md-6"],[1,"login-label","required"],["formControlName","email","type","email","placeholder","Enter Email Address",1,"form-control",3,"keydown.space"],["class","text-error",4,"ngIf"],[1,"col-md-6","text-right"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275listener("ngSubmit",function(){return r.formSubmit()}),e.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",1)(5,"div",4)(6,"h4",5),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div",6),e.\u0275\u0275element(9,"div",7),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(10,"div",8)(11,"div",2)(12,"div",3)(13,"div",1)(14,"div",9)(15,"label",10),e.\u0275\u0275text(16,"Email Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"input",11),e.\u0275\u0275listener("keydown.space",function(a){return a.preventDefault()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(18,E,2,0,"div",12),e.\u0275\u0275template(19,I,2,0,"div",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",1)(21,"div",13)(22,"button",14),e.\u0275\u0275text(23,"Update"),e.\u0275\u0275elementEnd()()()()()()()),2&n&&(e.\u0275\u0275property("formGroup",r.form),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1(" ",null==r.commonService?null:r.commonService.breadcrumb," "),e.\u0275\u0275advance(11),e.\u0275\u0275property("ngIf",(null==r.form.controls.email.errors?null:r.form.controls.email.errors.required)&&r.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==r.form.controls.email.errors?null:r.form.controls.email.errors.email)&&r.showError))},dependencies:[d.NgIf,l.\u0275NgNoValidate,l.DefaultValueAccessor,l.NgControlStatus,l.NgControlStatusGroup,l.FormGroupDirective,l.FormControlName,C.mh],encapsulation:2}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,c.m,f.Bz.forChild(y)]}),t})()}}]);
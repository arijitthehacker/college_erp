"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[670],{32670:(x,m,e)=>{e.r(m),e.d(m,{SettingsModule:()=>y});var u=e(36895),l=e(38867),h=e(24250),s=e(90433),v=e(98099),a=e(92531),t=e(41571),f=e(7849),p=e(3755),g=e(20388),S=e(87564),b=e(12553);const C=[{path:"",component:(()=>{class n{constructor(o,i,d,I,j,c){this.fb=o,this.message=i,this.http=d,this.bsModalRef=I,this.commonService=j,this.activatedRoute=c,this.showError=!1,c.params.subscribe(M=>{this.type=M.type,this.getData()})}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({member_share_link:["",s.kI.required]})}formSubmit(){if(this.form.valid){const o=JSON.parse(JSON.stringify(this.form.value));this.http.putData(a.l.managed_user_share_link,o).subscribe(()=>{this.message.toast("success",v.H.updatedSuccess)},()=>{})}else this.showError=!0}getData(){this.http.getData(a.l.user_share_link_details).subscribe(o=>{this.form.controls.member_share_link.patchValue(o.data.member_share_link)})}}return n.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(s.qu),t.\u0275\u0275directiveInject(f.e),t.\u0275\u0275directiveInject(p.O),t.\u0275\u0275directiveInject(g.UZ),t.\u0275\u0275directiveInject(S.v),t.\u0275\u0275directiveInject(l.gz))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-add-account"]],decls:23,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"modal-footer"],["type","submit",1,"btn","btn-blue-outline"],[1,"row","mt-3","mb-2"],[1,"col-md-4","form-group"],[1,"required","set-label",2,"font-size","20px"],[1,"col-md-6","form-group"],[1,"switch"],["type","checkbox","formControlName","member_share_link"],[1,"slider","round"]],template:function(o,i){1&o&&(t.\u0275\u0275elementStart(0,"form",0),t.\u0275\u0275listener("ngSubmit",function(){return i.formSubmit()}),t.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",1)(5,"div",4)(6,"h4",5),t.\u0275\u0275text(7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"div",6)(9,"div",7)(10,"button",8),t.\u0275\u0275text(11,"Save"),t.\u0275\u0275elementEnd()()()()()()(),t.\u0275\u0275elementStart(12,"div",9)(13,"div",2)(14,"div",3)(15,"div",1)(16,"div",10)(17,"label",11),t.\u0275\u0275text(18,"User Share Link Details"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(19,"div",12)(20,"label",13),t.\u0275\u0275element(21,"input",14)(22,"span",15),t.\u0275\u0275elementEnd()()()()()()()),2&o&&(t.\u0275\u0275property("formGroup",i.form),t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate1(" ",null==i.commonService?null:i.commonService.breadcrumb," "))},dependencies:[s._Y,s.Wl,s.JJ,s.JL,s.sg,s.u,b.mh],encapsulation:2}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[u.CommonModule,h.m,l.Bz.forChild(C)]}),n})()}}]);
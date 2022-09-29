"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[423],{9423:($,g,i)=>{i.r(g),i.d(g,{PropertyCategoriesModule:()=>U});var d=i(6895),_=i(2227),c=i(5522),p=i(8099),m=i(433),b=i(7579),e=i(1571),u=i(7849),f=i(3755),h=i(388),v=i(7564),S=i(2553);function x(o,a){1&o&&(e.\u0275\u0275elementStart(0,"div",19),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function I(o,a){if(1&o&&e.\u0275\u0275element(0,"img",20),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("src",null==t.form||null==t.form.value?null:t.form.value.image,e.\u0275\u0275sanitizeUrl)}}function P(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.removeImage("image"))}),e.\u0275\u0275elementEnd()}}function E(o,a){1&o&&(e.\u0275\u0275elementStart(0,"div",19),e.\u0275\u0275text(1," Please select image. "),e.\u0275\u0275elementEnd())}let k=(()=>{class o{constructor(t,n,r,l,s){this.fb=t,this.message=n,this.http=r,this.bsModalRef=l,this.commonService=s,this.showError=!1,this.onClose=new b.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({image:["",[m.Validators.required]],name:["",[m.Validators.required]]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({image:t.image,name:t.name})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(c.l.add_edit_peroperty_categories,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}selectImage(t,n){this.http.uploadImageService(c.l.upload_api,t,n).subscribe(r=>{this.form.controls.image.patchValue(r.data.original)},()=>{})}removeImage(t){this.form.controls.image.patchValue(t)}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(m.FormBuilder),e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(h.UZ),e.\u0275\u0275directiveInject(v.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:26,vars:9,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","type","text","placeholder","Enter name",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],[1,"required"],[1,"product-images"],["type","file","id","image","accept","image/jpg, image/jpeg, image/png",1,"file-upload",3,"change"],["for","image"],["src","/assets/images/ic_camera.png"],["class","ml-4 uploaded-img","height","72","for","image",3,"src",4,"ngIf"],["class","fa fa-times-circle fa-trash-css",3,"click",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"],["height","72","for","image",1,"ml-4","uploaded-img",3,"src"],[1,"fa","fa-times-circle","fa-trash-css",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,x,2,0,"div",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13,"Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",10)(15,"input",11),e.\u0275\u0275listener("change",function(l){return n.selectImage(l,"image")}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"label",12),e.\u0275\u0275element(17,"img",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(18,I,1,1,"img",14),e.\u0275\u0275template(19,P,1,0,"i",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(20,E,2,0,"div",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"div",16)(22,"button",17),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(23,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"button",18),e.\u0275\u0275text(25),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Create New"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.image.errors?null:n.form.controls.image.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[d.NgIf,m.\u0275NgNoValidate,m.DefaultValueAccessor,m.NgControlStatus,m.NgControlStatusGroup,m.FormGroupDirective,m.FormControlName,S.mh],encapsulation:2}),o})();var C=i(8867),D=i(1305),T=i(2382),y=i(4333);function V(o,a){1&o&&e.\u0275\u0275element(0,"i",22)}function j(o,a){1&o&&e.\u0275\u0275element(0,"i",23)}function N(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"img",15),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.commonService.openLightBox(l.image))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td",16)(8,"div",17),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.blockUnblock(l))}),e.\u0275\u0275template(9,V,1,0,"i",18),e.\u0275\u0275template(10,j,1,0,"i",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div")(12,"i",20),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.addEditModalOpen(l))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div")(14,"i",21),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.deleteData(l))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=a.$implicit,n=a.index,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+r.pagination.pageSize*(r.pagination.page-1)+1),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.image,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==t?null:t.is_blocked),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=t&&t.is_blocked))}}function w(o,a){1&o&&e.\u0275\u0275element(0,"app-no-record")}function F(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"div",24),e.\u0275\u0275elementStart(2,"div",25)(3,"pagination-controls",26),e.\u0275\u0275listener("pageChange",function(r){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext();return l.pagination.pageNo=r,e.\u0275\u0275resetView(l.getData())}),e.\u0275\u0275elementEnd()()()}}const A=function(o,a,t){return{itemsPerPage:o,currentPage:a,totalItems:t}};let M=(()=>{class o{constructor(t,n,r,l,s,L){this.http=t,this.message=n,this.commonService=r,this.modalService=l,this.router=s,this.lightbox=L,this.allData=[],this.date="",this.pagination=new _.j,this.search=new m.FormControl("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(c.l.list_peroperty_categories,t).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(c.l.managed_peroperty_categories,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(c.l.managed_peroperty_categories,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(k,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(v.v),e.\u0275\u0275directiveInject(h.tT),e.\u0275\u0275directiveInject(C.F0),e.\u0275\u0275directiveInject(D.ey))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:34,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9"],[1,"col-md-5"],[1,"col-md-4","sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"small-img",3,"src","click"],[1,"edit-section"],[3,"click"],["class","fa fa-lock",4,"ngIf"],["class","fa fa-unlock",4,"ngIf"],[1,"fa","fa-edit",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"fa","fa-lock"],[1,"fa","fa-unlock"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",0),e.\u0275\u0275element(9,"div",6)(10,"div",3),e.\u0275\u0275elementStart(11,"div",7)(12,"button",8),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(13," Create New Property Category "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(14,"div",9)(15,"div",1)(16,"div",2)(17,"div",10)(18,"table",11)(19,"thead")(20,"tr")(21,"th"),e.\u0275\u0275text(22,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"th"),e.\u0275\u0275text(24,"Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"th"),e.\u0275\u0275text(26,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"th"),e.\u0275\u0275text(28,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(29,"tbody"),e.\u0275\u0275template(30,N,15,5,"tr",12),e.\u0275\u0275pipe(31,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(32,w,1,0,"app-no-record",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(33,F,4,0,"div",14),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(24),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(31,4,n.allData,e.\u0275\u0275pureFunction3(7,A,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[d.NgForOf,d.NgIf,T.b,y.LS,y._s],encapsulation:2}),o})();var O=i(8226);const R=[{path:"",component:M}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,O.m,C.Bz.forChild(R)]}),o})()}}]);
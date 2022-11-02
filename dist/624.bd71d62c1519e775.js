"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[624],{3624:(G,u,i)=>{i.r(u),i.d(u,{DevelopersModule:()=>B});var c=i(6895),S=i(2227),d=i(5522),p=i(8099),s=i(433),D=i(7579),e=i(1571),v=i(7849),f=i(3755),g=i(388),h=i(7564),b=i(2553);function x(o,r){1&o&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function E(o,r){1&o&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function I(o,r){1&o&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function y(o,r){if(1&o&&e.\u0275\u0275element(0,"img",22),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("src",null==t.form||null==t.form.value?null:t.form.value.image,e.\u0275\u0275sanitizeUrl)}}function k(o,r){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",23),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.removeImage("image"))}),e.\u0275\u0275elementEnd()}}function T(o,r){1&o&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275text(1," Please select image. "),e.\u0275\u0275elementEnd())}let N=(()=>{class o{constructor(t,n,l,a,m){this.fb=t,this.message=n,this.http=l,this.bsModalRef=a,this.commonService=m,this.showError=!1,this.onClose=new D.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({image:["",s.Validators.required],description:["",s.Validators.required],address:["",s.Validators.required],name:["",[s.Validators.required]]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({image:t.image,address:t.address,description:t.description,name:t.name})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.http.postData(d.l.add_edit_developers,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}selectImage(t,n){this.http.uploadImageService(d.l.upload_api,t,n).subscribe(l=>{this.form.controls.image.patchValue(l.data.original)},()=>{})}removeImage(t){this.form.controls.image.patchValue(t)}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.FormBuilder),e.\u0275\u0275directiveInject(v.e),e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(g.UZ),e.\u0275\u0275directiveInject(h.v))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-add-account"]],decls:37,vars:10,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","type","text","placeholder","Enter name",1,"form-control"],["class","text-error",4,"ngIf"],["formControlName","address","type","text","placeholder","Enter address",1,"form-control"],["formControlName","description","type","text","placeholder","Enter description",1,"form-control"],[1,"required"],[1,"product-images"],["type","file","id","image","accept","image/jpg, image/jpeg, image/png",1,"file-upload",3,"change"],["for","image"],["src","/assets/images/ic_camera.png"],["class","ml-4 uploaded-img","height","72","for","image",3,"src",4,"ngIf"],["class","fa fa-times-circle fa-trash-css",3,"click",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"],["height","72","for","image",1,"ml-4","uploaded-img",3,"src"],[1,"fa","fa-times-circle","fa-trash-css",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,x,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",6),e.\u0275\u0275text(13,"address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",9),e.\u0275\u0275template(15,E,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",5)(17,"label",6),e.\u0275\u0275text(18,"description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"textarea",10),e.\u0275\u0275text(20,"        "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(21,I,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",5)(23,"label",11),e.\u0275\u0275text(24,"Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",12)(26,"input",13),e.\u0275\u0275listener("change",function(a){return n.selectImage(a,"image")}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"label",14),e.\u0275\u0275element(28,"img",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(29,y,1,1,"img",16),e.\u0275\u0275template(30,k,1,0,"i",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(31,T,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"div",18)(33,"button",19),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(34,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"button",20),e.\u0275\u0275text(36),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Create New"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.address.errors?null:n.form.controls.address.errors.required)&&n.showError),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==n.form.controls.description.errors?null:n.form.controls.description.errors.required)&&n.showError),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.image.errors?null:n.form.controls.image.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[c.NgIf,s.\u0275NgNoValidate,s.DefaultValueAccessor,s.NgControlStatus,s.NgControlStatusGroup,s.FormGroupDirective,s.FormControlName,b.mh],encapsulation:2}),o})();var C=i(8867),V=i(1305),j=i(2382),w=i(1681),_=i(4333);function A(o,r){1&o&&e.\u0275\u0275element(0,"i",22)}function F(o,r){1&o&&e.\u0275\u0275element(0,"i",23)}function M(o,r){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"img",14),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.commonService.openLightBox(a.image))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275element(8,"app-see-more",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275element(10,"app-see-more",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td",16)(12,"div",17),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.blockUnblock(a))}),e.\u0275\u0275template(13,A,1,0,"i",18),e.\u0275\u0275template(14,F,1,0,"i",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div")(16,"i",20),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.addEditModalOpen(a))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(17,"div")(18,"i",21),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.deleteData(a))}),e.\u0275\u0275elementEnd()()()()}if(2&o){const t=r.$implicit,n=r.index,l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",10*(l.pagination.pageNo-1)+n+1," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.image,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.description),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.address),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null==t?null:t.is_blocked),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=t&&t.is_blocked))}}function O(o,r){1&o&&e.\u0275\u0275element(0,"app-no-record")}function P(o,r){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"div",24),e.\u0275\u0275elementStart(2,"div",25)(3,"pagination-controls",26),e.\u0275\u0275listener("pageChange",function(l){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return a.pagination.pageNo=l,e.\u0275\u0275resetView(a.getData())}),e.\u0275\u0275elementEnd()()()}}const R=function(o,r,t){return{itemsPerPage:o,currentPage:r,totalItems:t}};let U=(()=>{class o{constructor(t,n,l,a,m,z){this.http=t,this.message=n,this.commonService=l,this.modalService=a,this.router=m,this.lightbox=z,this.allData=[],this.date="",this.pagination=new S.j,this.search=new s.FormControl("")}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit;let t={skip:this.pagination.skip};this.search.value&&(t.search=this.search.value),this.http.getData(d.l.list_developers,t).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(d.l.managed_developers,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}blockUnblock(t){this.http.putData(d.l.managed_developers,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}addEditModalOpen(t){this.modalService.show(N,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(()=>{this.getData()})}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(f.O),e.\u0275\u0275directiveInject(v.e),e.\u0275\u0275directiveInject(h.v),e.\u0275\u0275directiveInject(g.tT),e.\u0275\u0275directiveInject(C.F0),e.\u0275\u0275directiveInject(V.ey))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-accounts"]],decls:35,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"small-img",3,"src","click"],[3,"msg"],[1,"edit-section"],[3,"click"],["class","fa fa-lock",4,"ngIf"],["class","fa fa-unlock",4,"ngIf"],[1,"fa","fa-edit",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"fa","fa-lock"],[1,"fa","fa-unlock"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(10," Create New Developer "),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(11,"div",8)(12,"div",1)(13,"div",2)(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th"),e.\u0275\u0275text(19,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"th"),e.\u0275\u0275text(21,"Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(30,"tbody"),e.\u0275\u0275template(31,M,19,7,"tr",11),e.\u0275\u0275pipe(32,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(33,O,1,0,"app-no-record",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(34,P,4,0,"div",13),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(25),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(32,4,n.allData,e.\u0275\u0275pureFunction3(7,R,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[c.NgForOf,c.NgIf,j.b,w.S,_.LS,_._s],encapsulation:2}),o})();var L=i(8226);const $=[{path:"",component:U}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,L.m,C.Bz.forChild($)]}),o})()}}]);
"use strict";(self.webpackChunkoffice=self.webpackChunkoffice||[]).push([[642],{2424:(pe,_,d)=>{d.r(_),d.d(_,{PropertiesModule:()=>me});var c=d(6895),b=d(2227),m=d(5522),p=d(8099),l=d(433),h=d(7579),e=d(1571),f=d(7849),g=d(3755),u=d(388),v=d(7564),x=d(4663),E=d(2553);function A(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function I(r,o){if(1&r&&(e.\u0275\u0275elementStart(0,"option",47),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&r){const t=o.$implicit;e.\u0275\u0275property("value",t._id),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",null==t?null:t.name," ")}}function P(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function T(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function D(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function N(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function V(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function k(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function w(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function q(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function j(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function F(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function O(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function L(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function R(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function z(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function M(r,o){if(1&r&&e.\u0275\u0275element(0,"img",48),2&r){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("src",null==t.form||null==t.form.value?null:t.form.value.cover_image,e.\u0275\u0275sanitizeUrl)}}function H(r,o){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",49),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.removeImage("cover_image"))}),e.\u0275\u0275elementEnd()}}function $(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",46),e.\u0275\u0275text(1," Please select image. "),e.\u0275\u0275elementEnd())}function U(r,o){if(1&r&&e.\u0275\u0275element(0,"img",51),2&r){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275property("src",t,e.\u0275\u0275sanitizeUrl)}}function G(r,o){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",49),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext().index,a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.removeImageFromArr(i))}),e.\u0275\u0275elementEnd()}}function B(r,o){if(1&r&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,U,1,1,"img",50),e.\u0275\u0275template(2,G,1,0,"i",39),e.\u0275\u0275elementContainerEnd()),2&r){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t)}}let J=(()=>{class r{constructor(t,n,i,a,s){this.fb=t,this.message=n,this.http=i,this.bsModalRef=a,this.commonService=s,this.showError=!1,this.onClose=new h.x,this.categories=[],this.images=[]}ngOnInit(){this.makeForm(),this.categoryList()}makeForm(){this.form=this.fb.group({category_id:["",l.Validators.required],descriptuon:["",l.Validators.required],cover_image:["",l.Validators.required],bedroom:["",l.Validators.required],bathroom:["",l.Validators.required],area_size:["",l.Validators.required],tensure:["",l.Validators.required],discount_type:["",l.Validators.required],discount:["",l.Validators.required],completion_year:["",l.Validators.required],price:["",l.Validators.required],is_featured:[!0,l.Validators.required],area_size_type:["",l.Validators.required],address:["",l.Validators.required],lat:["",l.Validators.required],lng:["",l.Validators.required],name:["",l.Validators.required]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({category_id:t.category_id,lat:t.lat,lng:t.lng,address:t.address,discount_type:t.discount_type,is_featured:t.is_featured,descriptuon:t.descriptuon,completion_year:t.completion_year,area_size_type:t.area_size_type,price:t.price,discount:t.discount,cover_image:t.cover_image,tensure:t.tensure,bedroom:t.bedroom,area_size:t.area_size,bathroom:t.bathroom,name:t.name}),t.location.coordinates&&this.form.patchValue({lat:t.location.coordinates[1],lng:t.location.coordinates[0]})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),this.images.length&&(t.images=this.images),this.http.postData(m.l.add_edit_peroperties,t).subscribe(()=>{this.onClose.next(null),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}categoryList(){this.http.getData(m.l.list_peroperty_categories,{is_pagination:!1},!0).subscribe(n=>{this.categories=n.data.data},()=>{})}selectImage(t,n,i){this.http.uploadImageService(m.l.upload_api,t,n).subscribe(a=>{1==i?(console.log("am in if"),this.form.controls.cover_image.patchValue(a.data.original)):(console.log("am in else"),this.images.push(a.data.original))},()=>{})}removeImage(t){this.form.controls.image.patchValue(t)}removeImageFromArr(t){this.images.splice(t,1)}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(l.FormBuilder),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(u.UZ),e.\u0275\u0275directiveInject(v.v))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-add-account"]],decls:128,vars:24,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-4","form-group"],[1,"required","set-label"],["formControlName","name","type","text","placeholder","Enter name",1,"form-control"],["class","text-error",4,"ngIf"],["formControlName","category_id",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","descriptuon","placeholder","Enter description",1,"form-control"],["formControlName","bedroom","type","text","placeholder","Enter bedroom",1,"form-control"],["formControlName","bathroom","type","text","placeholder","Enter bathroom",1,"form-control"],["formControlName","area_size","type","text","placeholder","Enter area size",1,"form-control"],["formControlName","area_size_type","type","text","placeholder","Enter area size type",1,"form-control"],["formControlName","tensure",1,"form-control"],["value","BOTH"],["value","FREEHOLD"],["value","LEASEHOLD"],["formControlName","price","appNumberOnly","","type","text","placeholder","Enter price",1,"form-control"],["formControlName","discount_type",1,"form-control"],["value","PERCENTAGE"],["value","DIRECT"],["formControlName","discount","appNumberOnly","","type","text","placeholder","Enter discount",1,"form-control"],["formControlName","completion_year","type","text","placeholder","Enter completion year",1,"form-control"],["formControlName","address","type","text","placeholder","Enter address",1,"form-control"],["formControlName","lat","type","text","placeholder","Enter latitude",1,"form-control"],["formControlName","lng","type","text","placeholder","Enter Longitude",1,"form-control"],[1,"form-check-inline",2,"margin-left","21px"],[1,"form-check-label"],["type","checkbox","formControlName","is_featured","value","true",1,"form-check-input"],[1,"required"],[1,"product-images"],["type","file","id","cover_image","accept","image/jpg, image/jpeg, image/png",1,"file-upload",3,"change"],["for","cover_image"],["src","/assets/images/ic_camera.png"],["class","ml-4 uploaded-img","height","72","for","cover_image",3,"src",4,"ngIf"],["class","fa fa-times-circle fa-trash-css",3,"click",4,"ngIf"],["type","file","id","image","accept","image/jpg, image/jpeg, image/png",1,"file-upload",3,"change"],["for","image"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"],[3,"value"],["height","72","for","cover_image",1,"ml-4","uploaded-img",3,"src"],[1,"fa","fa-times-circle","fa-trash-css",3,"click"],["class","ml-4 multiple-images",3,"src",4,"ngIf"],[1,"ml-4","multiple-images",3,"src"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,A,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",6),e.\u0275\u0275text(13,"Select Category"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"select",9)(15,"option",10),e.\u0275\u0275text(16,"Please select category"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,I,2,2,"option",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(18,P,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"div",5)(20,"label",6),e.\u0275\u0275text(21,"Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"textarea",12),e.\u0275\u0275text(23,"        "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(24,T,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",5)(26,"label",6),e.\u0275\u0275text(27,"bedroom"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",13),e.\u0275\u0275template(29,D,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",5)(31,"label",6),e.\u0275\u0275text(32,"bathroom"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",14),e.\u0275\u0275template(34,N,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",5)(36,"label",6),e.\u0275\u0275text(37,"area size"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(38,"input",15),e.\u0275\u0275template(39,V,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"div",5)(41,"label",6),e.\u0275\u0275text(42,"area size type"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(43,"input",16),e.\u0275\u0275template(44,k,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"div",5)(46,"label",6),e.\u0275\u0275text(47,"Select tensure"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"select",17)(49,"option",10),e.\u0275\u0275text(50,"Please select tensure"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"option",18),e.\u0275\u0275text(52," BOTH"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"option",19),e.\u0275\u0275text(54," FREEHOLD"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(55,"option",20),e.\u0275\u0275text(56," LEASEHOLD"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(57,w,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"div",5)(59,"label",6),e.\u0275\u0275text(60,"price"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(61,"input",21),e.\u0275\u0275template(62,q,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(63,"div",5)(64,"label",6),e.\u0275\u0275text(65,"Select Discount type"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"select",22)(67,"option",10),e.\u0275\u0275text(68,"Please select disocunt type"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"option",23),e.\u0275\u0275text(70," PERCENTAGE"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(71,"option",24),e.\u0275\u0275text(72," DIRECT"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(73,j,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"div",5)(75,"label",6),e.\u0275\u0275text(76,"discount"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(77,"input",25),e.\u0275\u0275template(78,F,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(79,"div",5)(80,"label",6),e.\u0275\u0275text(81,"completion year"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(82,"input",26),e.\u0275\u0275template(83,O,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(84,"div",5)(85,"label",6),e.\u0275\u0275text(86,"Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(87,"input",27),e.\u0275\u0275template(88,L,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(89,"div",5)(90,"label",6),e.\u0275\u0275text(91,"Latitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(92,"input",28),e.\u0275\u0275template(93,R,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(94,"div",5)(95,"label",6),e.\u0275\u0275text(96,"Longitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(97,"input",29),e.\u0275\u0275template(98,z,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(99,"div",5)(100,"div",30)(101,"label",31),e.\u0275\u0275element(102,"input",32),e.\u0275\u0275text(103,"Featured? "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(104,"div",4)(105,"div",5)(106,"label",33),e.\u0275\u0275text(107,"Cover Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(108,"div",34)(109,"input",35),e.\u0275\u0275listener("change",function(a){return n.selectImage(a,"cover_image",1)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(110,"label",36),e.\u0275\u0275element(111,"img",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(112,M,1,1,"img",38),e.\u0275\u0275template(113,H,1,0,"i",39),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(114,$,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(115,"div",5)(116,"label",33),e.\u0275\u0275text(117,"Images"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(118,"div",34)(119,"input",40),e.\u0275\u0275listener("change",function(a){return n.selectImage(a,"image",2)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(120,"label",41),e.\u0275\u0275element(121,"img",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(122,B,3,2,"ng-container",42),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(123,"div",43)(124,"button",44),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(125,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(126,"button",45),e.\u0275\u0275text(127),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",n.modalData?"Edit":"Add"," ",n.commonService.title," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",n.categories),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.category_id.errors?null:n.form.controls.category_id.errors.required)&&n.showError),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",(null==n.form.controls.descriptuon.errors?null:n.form.controls.descriptuon.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.bedroom.errors?null:n.form.controls.bedroom.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.bathroom.errors?null:n.form.controls.bathroom.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.area_size.errors?null:n.form.controls.area_size.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.area_size_type.errors?null:n.form.controls.area_size_type.errors.required)&&n.showError),e.\u0275\u0275advance(13),e.\u0275\u0275property("ngIf",(null==n.form.controls.tensure.errors?null:n.form.controls.tensure.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.price.errors?null:n.form.controls.price.errors.required)&&n.showError),e.\u0275\u0275advance(11),e.\u0275\u0275property("ngIf",(null==n.form.controls.discount_type.errors?null:n.form.controls.discount_type.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.discount.errors?null:n.form.controls.discount.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.completion_year.errors?null:n.form.controls.completion_year.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.address.errors?null:n.form.controls.address.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.lat.errors?null:n.form.controls.lat.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.lng.errors?null:n.form.controls.lng.errors.required)&&n.showError),e.\u0275\u0275advance(14),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.cover_image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.form||null==n.form.value?null:n.form.value.cover_image),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.cover_image.errors?null:n.form.controls.cover_image.errors.required)&&n.showError),e.\u0275\u0275advance(8),e.\u0275\u0275property("ngForOf",n.images),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[c.NgForOf,c.NgIf,x.Y,l.\u0275NgNoValidate,l.NgSelectOption,l.\u0275NgSelectMultipleOption,l.DefaultValueAccessor,l.CheckboxControlValueAccessor,l.SelectControlValueAccessor,l.NgControlStatus,l.NgControlStatusGroup,l.FormGroupDirective,l.FormControlName,E.mh],encapsulation:2}),r})();var y=d(2382);function Z(r,o){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td",10)(8,"div")(9,"i",11),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.deleteData(a))}),e.\u0275\u0275elementEnd()()()()}if(2&r){const t=o.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.location.coordinates[0]),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.location.coordinates[1])}}function Y(r,o){1&r&&e.\u0275\u0275element(0,"app-no-record")}let K=(()=>{class r{constructor(t,n,i,a,s){this.message=t,this.http=n,this.bsModalRef=i,this.commonService=a,this.modalService=s,this.showError=!1,this.onClose=new h.x,this.allData=[]}ngOnInit(){this.getData()}openAddAddress(t){this.bsModalRef.hide(),this.onClose.next(t?{type:"editAddress",data:t}:{type:"addAddress"})}getData(){this.http.getData(m.l.list_property_address,{is_pagination:!1,property_id:this.modalData._id},!0).subscribe(n=>{this.allData=n.data.data},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(m.l.managed_peroperty_address,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(u.UZ),e.\u0275\u0275directiveInject(v.v),e.\u0275\u0275directiveInject(u.tT))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-add-account"]],decls:24,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],[1,"btn-blue-outline",3,"click"],[1,"modal-body"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],[1,"edit-section"],[1,"fa","fa-trash",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2," Address List "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return n.openAddAddress()}),e.\u0275\u0275text(4,"+ Add New Address"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"div",3)(6,"div",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th"),e.\u0275\u0275text(11,"Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"th"),e.\u0275\u0275text(13,"Longitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"th"),e.\u0275\u0275text(15,"Latitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"th"),e.\u0275\u0275text(17,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(18,"tbody"),e.\u0275\u0275template(19,Z,10,3,"tr",6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(20,Y,1,0,"app-no-record",7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"div",8)(22,"button",9),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(23,"Close"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(19),e.\u0275\u0275property("ngForOf",n.allData),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n.allData.length))},dependencies:[c.NgForOf,c.NgIf,y.b],encapsulation:2}),r})();function Q(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function W(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}function X(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," This field is required. "),e.\u0275\u0275elementEnd())}let ee=(()=>{class r{constructor(t,n,i,a,s){this.fb=t,this.message=n,this.http=i,this.bsModalRef=a,this.commonService=s,this.showError=!1,this.onClose=new h.x}ngOnInit(){this.makeForm()}makeForm(){this.form=this.fb.group({lng:["",l.Validators.required],name:["",l.Validators.required],lat:["",l.Validators.required]}),this.modalData&&this.patchData(this.modalData)}patchData(t){this.form.patchValue({lng:t.lng,name:t.name,lat:t.lat})}formSubmit(){if(this.form.valid){const t=JSON.parse(JSON.stringify(this.form.value));this.modalData&&(t._id=this.modalData._id),t.property_id=this.propertyData._id,this.http.postData(m.l.add_edit_peroperty_address,t).subscribe(()=>{this.onClose.next({type:"openAddressList"}),this.message.toast("success",this.modalData?p.H.updatedSuccess:p.H.addedSuccess),this.bsModalRef.hide()},()=>{})}else this.showError=!0}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(l.FormBuilder),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(u.UZ),e.\u0275\u0275directiveInject(v.v))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-add-account"]],decls:26,vars:7,consts:[[1,"modal-header"],[1,"modal-title"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"row"],[1,"col-md-12","form-group"],[1,"required","set-label"],["formControlName","name","type","text","placeholder","Enter Address",1,"form-control",3,"autofocus"],["class","text-error",4,"ngIf"],["formControlName","lat","type","text","placeholder","Enter latitude",1,"form-control"],["formControlName","lng","type","text","placeholder","Enter Longitude",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn-cancel","mr-3",3,"click"],["type","submit",1,"btn","btn-blue-outline"],[1,"text-error"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return n.formSubmit()}),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"Address"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,Q,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",6),e.\u0275\u0275text(13,"Latitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",9),e.\u0275\u0275template(15,W,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",5)(17,"label",6),e.\u0275\u0275text(18,"Longitude"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"input",10),e.\u0275\u0275template(20,X,2,0,"div",8),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(21,"div",11)(22,"button",12),e.\u0275\u0275listener("click",function(){return n.bsModalRef.hide()}),e.\u0275\u0275text(23,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"button",13),e.\u0275\u0275text(25),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",n.modalData?"Edit":"Add"," Address "),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.form),e.\u0275\u0275advance(6),e.\u0275\u0275property("autofocus",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.form.controls.name.errors?null:n.form.controls.name.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.lat.errors?null:n.form.controls.lat.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",(null==n.form.controls.lng.errors?null:n.form.controls.lng.errors.required)&&n.showError),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.modalData?"Update":"Submit"))},dependencies:[c.NgIf,l.\u0275NgNoValidate,l.DefaultValueAccessor,l.NgControlStatus,l.NgControlStatusGroup,l.FormGroupDirective,l.FormControlName,E.mh],encapsulation:2}),r})();var S=d(8867),te=d(1305),ne=d(1681),C=d(4333);function re(r,o){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"img",15),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.commonService.openLightBox(a.cover_image))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275element(8,"app-see-more",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td")(10,"a",17),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.openProAddresses(a))}),e.\u0275\u0275text(11,"Address List"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"td",18)(13,"div")(14,"i",19),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.addEditModalOpen(a))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"div")(16,"i",20),e.\u0275\u0275listener("click",function(){const a=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.deleteData(a))}),e.\u0275\u0275elementEnd()()()()}if(2&r){const t=o.$implicit,n=o.index,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n+i.pagination.pageSize*(i.pagination.page-1)+1),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.cover_image,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate((null==t?null:t.name)||"-"),e.\u0275\u0275advance(2),e.\u0275\u0275property("msg",null==t?null:t.descriptuon)}}function oe(r,o){1&r&&e.\u0275\u0275element(0,"app-no-record")}function ie(r,o){if(1&r){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",21)(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",22)(5,"pagination-controls",23),e.\u0275\u0275listener("pageChange",function(i){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return a.pagination.pageNo=i,e.\u0275\u0275resetView(a.getData())}),e.\u0275\u0275elementEnd()()()}if(2&r){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Showing ",0===t.pagination.count?0:t.pagination.skip+1," to ",t.commonService.cal(t.pagination.pageNo,t.pagination.limit,t.pagination.count)," out of ",t.pagination.count," entries ")}}const le=function(r,o,t){return{itemsPerPage:r,currentPage:o,totalItems:t}};let ae=(()=>{class r{constructor(t,n,i,a,s,ce){this.http=t,this.message=n,this.commonService=i,this.modalService=a,this.router=s,this.lightbox=ce,this.allData=[],this.date="",this.pagination=new b.j}ngOnInit(){this.getData()}getData(){this.pagination.skip=(this.pagination.pageNo-1)*this.pagination.limit,this.http.getData(m.l.list_properties,{skip:this.pagination.skip}).subscribe(n=>{this.allData=n.data.data,this.pagination.count=n.data.total_count},()=>{})}blockUnblock(t){this.http.putData(m.l.managed_peroperties,{_id:t._id,is_blocked:!t.is_blocked}).subscribe(()=>{this.commonService.checkBlockUnblock(t)},()=>{})}deleteData(t){this.message.confirm(`delete this ${this.commonService.title}`).then(n=>{n.isConfirmed&&this.http.putData(m.l.managed_peroperties,{_id:t._id,is_deleted:!0}).subscribe(()=>{this.message.toast("success",p.H.deleteSuccess),this.getData()},()=>{})})}addEditModalOpen(t){this.modalService.show(J,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-more-lg"}).content.onClose.subscribe(()=>{this.getData()})}openProAddresses(t){this.modalService.show(K,{initialState:{modalData:t},backdrop:"static",keyboard:!1,class:"modal-lg"}).content.onClose.subscribe(i=>{this.getData(),"addAddress"===i.type&&this.openAddAddress(t),"editAddress"===i.type&&this.openAddAddress(i.data,t)})}openAddAddress(t,n){this.modalService.show(ee,{initialState:{modalData:n,propertyData:t},backdrop:"static",keyboard:!1,class:"modal-md"}).content.onClose.subscribe(a=>{this.getData(),"openAddressList"===a.type&&this.openProAddresses(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.\u0275\u0275directiveInject(g.O),e.\u0275\u0275directiveInject(f.e),e.\u0275\u0275directiveInject(v.v),e.\u0275\u0275directiveInject(u.tT),e.\u0275\u0275directiveInject(S.F0),e.\u0275\u0275directiveInject(te.ey))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-accounts"]],decls:37,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"my-box"],[1,"col-md-3"],[1,"card-title","float-left"],[1,"col-md-9","text-right"],[1,"col-md-10"],[1,"col-md-2","sm-input-space"],[1,"btn","btn-blue-outline","float-right",3,"click"],[1,"row","mt-3","mb-2"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","row",4,"ngIf"],[1,"small-img",3,"src","click"],[3,"msg"],[1,"my-link",3,"click"],[1,"edit-section"],[1,"fa","fa-edit",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"col-sm-6"],[1,"col-sm-6","text-right"],["previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"div",0),e.\u0275\u0275element(9,"div",6),e.\u0275\u0275elementStart(10,"div",7)(11,"button",8),e.\u0275\u0275listener("click",function(){return n.addEditModalOpen()}),e.\u0275\u0275text(12," + Add New "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(13,"div",9)(14,"div",1)(15,"div",2)(16,"div",10)(17,"table",11)(18,"thead")(19,"tr")(20,"th"),e.\u0275\u0275text(21,"Sr. No."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"th"),e.\u0275\u0275text(23,"Cover Image"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"th"),e.\u0275\u0275text(27,"Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"th"),e.\u0275\u0275text(29,"Address List"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"th"),e.\u0275\u0275text(31,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"tbody"),e.\u0275\u0275template(33,re,17,4,"tr",12),e.\u0275\u0275pipe(34,"paginate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(35,oe,1,0,"app-no-record",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(36,ie,6,3,"div",14),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",null==n.commonService?null:n.commonService.breadcrumb," "),e.\u0275\u0275advance(27),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(34,4,n.allData,e.\u0275\u0275pureFunction3(7,le,n.pagination.pageSize,n.pagination.pageNo,n.pagination.count))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.pagination.count),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.pagination.count))},dependencies:[c.NgForOf,c.NgIf,y.b,ne.S,C.LS,C._s],encapsulation:2}),r})();var de=d(20);const se=[{path:"",component:ae}];let me=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,de.m,S.Bz.forChild(se)]}),r})()}}]);
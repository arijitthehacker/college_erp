import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ trim="blur" ]',
})
export class TrimDirective {

  constructor(
     private el: ElementRef
  ) { }

  // @HostListener('blur') onBlur() {
  //   const value = this.el.nativeElement.value;
  //   if (value) {
  //     this.el.nativeElement.value = value.trim();
  //   }
  // }
  @HostListener('blur', ['$event']) onBlur() {

      const value = this.el.nativeElement.value;
      if (value) {
        this.el.nativeElement.value = value.trim();
      }

  }


}
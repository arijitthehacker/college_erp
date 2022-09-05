import { Injectable } from '@angular/core';
import swal, { SweetAlertResult } from 'sweetalert2';
import { ConstMsg } from '../../core/ConstMsg';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = ConstMsg;

  constructor() {

  }

  /******************* toast messages ********************/
  toast(type, title: string) {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: type,
      title: title
    })

    // const toast = swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   showCloseButton: true,
    //   timer: 6000
    //   // animation: false,
    //   // customClass: 'uk-animation-slide-right-small'
    // });
    // toast.fire({
    //   // type,
    //   title
    // });
  }

  /******************* confirmation dialog box (returns a promise) ********************/
  async confirm(title: string, text?: string): Promise<SweetAlertResult> {

    return await swal.fire({
      text: text,
      icon: 'warning',
      showCancelButton: true,
      title: `Are you sure you want to ${title}?`,
      showConfirmButton: true
    });
  }

  /******************* alert dialog box with button ********************/
  alert(type, title: string, text?: string) {
    swal.fire(title, text, type);
  }

}


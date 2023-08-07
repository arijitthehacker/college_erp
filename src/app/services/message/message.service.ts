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
  toast(type, title: string, description?) {
    console.log(type)
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer);
        toast.addEventListener('mouseleave', swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: type,
      title: title
    });

    // if(type = 'Error'){
    //   const Toas =  swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text:'Customer not confirmed booking yet',
    //     toast: true,
    //     position: 'top-end',
    //     timer: 3000,
    //     showConfirmButton: false,
    //   });
    // }
   
    
  

 
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


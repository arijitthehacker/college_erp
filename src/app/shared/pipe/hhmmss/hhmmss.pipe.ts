import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hHMMSS'
})
export class HHMMSSPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value >= 0) {
      const sec_num = (parseInt(value, 10) * 60);
      let hours = Math.floor(sec_num / 3600);
      const minutes = Math.floor(sec_num / 60) % 60;
      // const seconds = sec_num % 60;
      let amPm = 'am';
      if (hours > 12) {
        hours = hours - 12;
        amPm = 'pm';
      }
      // return [hours, minutes, seconds].map(v => v < 10 ? '0' + v : v).filter((v, i) => v !== '00' || i > 0).join(':');
      return [hours, minutes].map(v => v < 10 ? '0' + v : v).filter((v, i) => v !== '00' || i > 0).join(':') + ' ' + amPm;
      // hours + ':' + minutes + amPm;
    } else {
      return '00:00';
    }
  }
}

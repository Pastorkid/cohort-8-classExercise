import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any): any {
    if (value !== null && value !== undefined && value !== '') {
      return value;
    } else {
      return 'N/A';
    }
  }
}

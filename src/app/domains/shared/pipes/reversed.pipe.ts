import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed',
  standalone: true
})
export class ReversedPipe implements PipeTransform {

  transform(value: string): string {
    // voltear palabra
    // tomo la palabra en un array lo volteo y lo uno
    return value.split('').reverse().join('')
  }

}

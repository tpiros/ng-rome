import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagList'
})
export class TagListPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(', ');
  }

}

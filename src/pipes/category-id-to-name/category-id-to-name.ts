import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CategoryIdToNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'categoryIdToName',
})
export class CategoryIdToNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}

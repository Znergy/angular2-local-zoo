import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "searchList",
  pure: true
})


export class SearchListPipe implements PipeTransform {
  transform(input: any, filter: string): any {
    if(filter === 'all') {
      return input;
    } else if(filter === 'young') {
      return input.filter(animal => animal.age < 4);
    } else if (filter === 'old') {
      return input.filter(animal => animal.age > 4);
    }
  }
}

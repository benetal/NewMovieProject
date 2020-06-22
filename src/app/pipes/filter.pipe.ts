import { Pipe, PipeTransform } from '@angular/core';
import {PopularComponent} from '../components/popular/popular.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, mTitle: string): any {
    if(mTitle==="") {
      return value;
    }
    const popularArray: any[]=[];
    for(let i=0; i < value.length; i++) {
      let popularName: string = value[i].title;
      if(popularName.startsWith(mTitle)) {
        popularArray.push(value[i])
      }
    }
    return popularArray;
  }

}

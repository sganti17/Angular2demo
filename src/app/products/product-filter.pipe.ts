import { Pipe, PipeTransform } from '@angular/core';
import {Iproduct} from './iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Iproduct[], args: string): Iproduct[] {
    return args ? value.filter(function (item) {
      if(item.productName.toLowerCase().indexOf(args.toLowerCase())!=-1){
      return value;
      }


    }) : value;
  }

}

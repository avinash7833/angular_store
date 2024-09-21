import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product-list/product';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: product[], ...args: any[]): product[] {
    
    if(args.length === 0){
      return value;
    }
    return value.filter((val:any)=>{
      return val.price > args[0]
    });
  }

}

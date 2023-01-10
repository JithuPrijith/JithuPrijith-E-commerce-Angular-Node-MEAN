import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts: [], searchKey: String, propname: any): any[] {
    const result: any = []
    if (!allProducts || searchKey == '' || propname == '') {
      return allProducts
    }

    allProducts.forEach((product:any) => {
      console.log(product[propname]);
      
      if(product[propname].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result
  }

}

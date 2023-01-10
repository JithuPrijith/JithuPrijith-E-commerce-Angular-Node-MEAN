import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  allProducts: any = []
  searchKey: any = ""
  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.api.getAllProducts().subscribe((data: any) => {
      this.allProducts = data
    })

    this.api.searchKey.subscribe(data => this.searchKey = data)
  }

  addToWishList(product: any) {
    this.api.addToWishlist(product).subscribe((result:any) => {
      alert(result.message)
    },
    (result :any) => {
      alert(result.error.message)
    })
  }

}

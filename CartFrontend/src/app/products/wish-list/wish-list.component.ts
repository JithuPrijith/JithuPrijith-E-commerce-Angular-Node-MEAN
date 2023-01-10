import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  wishlist: any = []
  errormsg: string = ""
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getWishlist().subscribe((result: any) => {
      this.wishlist = result.product
      if(this.wishlist.length == 0){
        this.errormsg = "Empty wishlist"
      }
    },
      (result: any) => {
        this.errormsg = result.error.message
        console.log(result);

      }
    )
  }

  deleteWish(product: any) {
    this.api.deleteWish(product._id).subscribe((result: any) => {
      alert(result.message)
      this.router.navigateByUrl('wish-list')
    },
      (result) => {
        alert(result.error.message)
      })
  }
}

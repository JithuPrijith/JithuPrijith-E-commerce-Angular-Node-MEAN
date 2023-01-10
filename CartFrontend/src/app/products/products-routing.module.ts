import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wish-list', component: WishListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

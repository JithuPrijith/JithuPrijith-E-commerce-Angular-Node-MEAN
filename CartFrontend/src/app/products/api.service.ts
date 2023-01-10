import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost:3000/all-products/')
  }

  addToWishlist(product: any) {
    let body = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
    }
    return this.http.post('http://localhost:3000/addtowishlist/', body)
  }

  getWishlist() {
    return this.http.get('http://localhost:3000/getwishlist/')
  }

  deleteWish(id: any) {
    return this.http.delete(`http://localhost:3000/deletewish/${id}`)
  }
}

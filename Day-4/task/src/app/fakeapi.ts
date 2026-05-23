import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Fakeapi {
  constructor(private http: HttpClient) {}
  getFakeProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getFakeProductsById(id: string) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
   private http = inject(HttpClient)
  constructor() { }
  getProducts(id?:string){
    const UrL = new URL('https://api.escuelajs.co/api/v1/products')
    if(id){
      UrL.searchParams.set('categoryId',id)
    }
    return this.http.get<Product[]>(UrL.toString())
  }
  getOne(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}

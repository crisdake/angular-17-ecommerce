import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
   private http = inject(HttpClient)
  constructor() { }
  getProducts(category_id?:string){
    const UrL = new URL('https://api.escuelajs.co/api/v1/products')
    if(category_id){
      UrL.searchParams.set('categoryId',category_id)
    }
    // falta arreglar categorias y el carrito de compras
    console.log(UrL.toString())
    return this.http.get<Product[]>(UrL.toString())
  }
  getOne(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
  getUsers(){
    return this.http.get<User[]>('https://api.escuelajs.co/api/v1/users')
  }
}

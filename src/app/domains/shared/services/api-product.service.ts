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
  getProducts(category_id?: string, title?: string, price_min?: string, price_max?: string) {
    const UrL = new URL('https://api.escuelajs.co/api/v1/products')
    if (category_id && title) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('title', title)
    }
    if (category_id && title && price_min) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('title', title)
      UrL.searchParams.set('price_min', price_min)
    }
    if (category_id && title && price_min && price_max) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('price_min', price_min)
      UrL.searchParams.set('title', title)
      UrL.searchParams.set('price_max', price_max)
    }
    if (category_id && price_min && price_max) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('price_min', price_min)
      UrL.searchParams.set('price_max', price_max)
    }
    if (category_id && price_min) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('price_min', price_min)
    }
    if (category_id && price_max) {
      UrL.searchParams.set('categoryId', category_id)
      UrL.searchParams.set('price_max', price_max)
    }
    if (category_id) {
      UrL.searchParams.set('categoryId', category_id)
    }
    if (title) {
      UrL.searchParams.set('title', title)
    }
    if (price_min) {
      UrL.searchParams.set('price_min', price_min)
    }
    if (price_max) {
      UrL.searchParams.set('price_max', price_max)
    }

    // falta arreglar categorias y el carrito de compras
    /* console.log(UrL.toString()) */
    return this.http.get<Product[]>(UrL.toString())
  }
  getOne(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
  getUsers() {
    return this.http.get<User[]>('https://api.escuelajs.co/api/v1/users')
  }
}

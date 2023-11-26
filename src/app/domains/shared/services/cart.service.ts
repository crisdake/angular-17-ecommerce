import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /*  cart = signal<Product[]>([])
   total = computed(() => {
     const cart = this.cart()
     return cart.reduce((total, product) => total + product.price, 0)
   }) */
  private _cart = new BehaviorSubject<Product[]>([]);
  cart$ = this._cart.asObservable();

  total$ = this.cart$.pipe(
    map(cart => cart.reduce((total, product) => total + product.price, 0))
  );
  constructor() { }
  addTocart(product: Product) {
    const currentCart = this._cart.value;
    this._cart.next([...currentCart, product]);
  }
  RemoveCart(product: Product) {
    const currentCart = this._cart.value;
    const indexToRemove = currentCart.findIndex(item => item.id === product.id);

    if (indexToRemove !== -1) {
      currentCart.splice(indexToRemove, 1);
      this._cart.next([...currentCart]);
    }
  }

}

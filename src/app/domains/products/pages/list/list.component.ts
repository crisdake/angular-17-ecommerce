import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { CategoriesService } from '@shared/services/categories.service';
import { ApiProductService } from '@shared/services/api-product.service';
import { HeaderComponent } from 'src/app/domain/shared/components/header/header.component';
import { Category } from '@shared/models/category.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent,RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products = signal<Product[]>([
  ])
  category = signal<Category[]>([])
  private cartService = inject(CartService)
  private ApiService = inject(ApiProductService)
  private CategoryService = inject(CategoriesService)
  @Input() category_id?: string
  ngOnInit(){
    this.GetCategory()
  }
  ngOnChanges(changes: SimpleChanges) {
    // necesito cambiar por el parametro category los productos que se reenderiza
    this.getProducts();
  }
  constructor(){
 /*    const initProducts: Product[]= [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        CreationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=33',
        CreationAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts) */
  }
/*   fromChild(event: string) {
    console.log('estamos en al padre');
    console.log(event);
  } */
  addTocart(product:Product){
      this.cartService.addTocart(product)
  }
  private getProducts(){
    this.ApiService.getProducts(this.category_id).subscribe({
      next: (product)=>{
        this.products.set(product)
      },
      error: (error)=>{
         return new Error (error)
      }
    })
  }
  private GetCategory(){
    this.CategoryService.getAll().subscribe({
      next: (category)=>{
         this.category.set(category)
      },
      error: (error)=>{
         return new Error (error)
      }
    })
  }
}

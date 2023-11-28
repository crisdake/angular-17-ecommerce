import { Component, Input, signal } from '@angular/core';
import { ApiProductService } from '@shared/services/api-product.service';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() id?: string
  product = signal<Product | null>(null)
  cover = signal('')
  constructor(private productService: ApiProductService, private cartService: CartService) { }
  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id)
        .subscribe({
          next: (product) => {
            console.log(product)
            this.product.set(product)
            if (product.images.length > 0) {
              this.cover.set(product.images[0])
            }
          }
        })
    }
  }
  Changecover(newimg: string) {
    this.cover.set(newimg)
  }
  addToCart() {
    const product = this.product()
    if (product) {
      this.cartService.addTocart(product)
    }
  }
}

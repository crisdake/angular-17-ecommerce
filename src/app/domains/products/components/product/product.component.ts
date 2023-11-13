import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { RouterLink } from '@angular/router';
import {ReversedPipe} from '@shared/pipes/reversed.pipe'
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversedPipe,TimeAgoPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
/*   @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = ''; */

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit(this.product);
  }
}
